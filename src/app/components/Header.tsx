import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { CartItem, FormData } from "../@types/types";

export default function Header({
  cart,
  setCart,
}: Readonly<{
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}>) {
  const [form, setForm] = useState<FormData>({
    nome: "",
    numero: "",
    bairro: "",
    rua: "",
    residencia: "",
    referencia: "",
  });

  const [isDelivery, setIsDelivery] = useState<boolean>(true); // Nova variável para controlar a opção de entrega

  // Função para atualizar a quantidade de itens no carrinho
  const updateQty = (id: number, delta: number, flavors?: string[]) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id &&
        JSON.stringify(item.flavors) === JSON.stringify(flavors)
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  // Função para remover o item do carrinho
  const removeItem = (id: number, flavors?: string[]) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          item.id !== id ||
          JSON.stringify(item.flavors) !== JSON.stringify(flavors)
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Função para verificar se todos os campos de entrega estão preenchidos
  const isDeliveryFormValid = () => {
    return (
      form.nome &&
      form.numero &&
      form.bairro &&
      form.rua &&
      form.residencia &&
      form.referencia
    );
  };

  const sendOrder = () => {
    const pedido = cart
      .map((item) => {
        const flavorText = item.flavors ? ` (${item.flavors.join(" + ")})` : "";
        return `${item.qty}x ${item.name}${flavorText}`;
      })
      .join(", ");

    // Mensagem básica do pedido
    let mensagem = `*Pedido*: ${pedido}\n*Total*: R$ ${total.toFixed(
      2
    )}\n---\n`;

    // Se for entrega, adiciona os dados do endereço
    if (isDelivery) {
      const dadosEntrega = `*Nome*: ${form.nome}\n*Número*: ${form.numero}\n*Bairro*: ${form.bairro}\n*Rua*: ${form.rua}\n*Nº*: ${form.residencia}\n*Referência*: ${form.referencia}`;
      mensagem += dadosEntrega;
    } else {
      mensagem += "*Opção de Retirada*: Sim\n";
    }

    const zapUrl = `https://wa.me/98985856218?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(zapUrl, "_blank");
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Posto 10</h1>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <ShoppingCart className="mr-2" /> Sacola ({cart.length})
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Sua sacola</h2>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.flavors?.join()}`}
                className="mb-2 flex justify-between items-center"
              >
                <span>
                  {item.qty}x {item.name}
                  {item.flavors ? ` (${item.flavors.join(" + ")})` : ""}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    onClick={() => updateQty(item.id, -1, item.flavors)}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => updateQty(item.id, 1, item.flavors)}
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => removeItem(item.id, item.flavors)}
                  >
                    Remover
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 p-6 font-bold">Total: R$ {total.toFixed(2)}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-xs m-auto">Finalizar pedido</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Dados de Entrega</DialogTitle>
              <div>
                <label>
                  <input
                    type="radio"
                    name="opcao"
                    checked={isDelivery}
                    onChange={() => setIsDelivery(true)}
                  />
                  Entregar
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="opcao"
                    checked={!isDelivery}
                    onChange={() => setIsDelivery(false)}
                  />
                  Retirar
                </label>
              </div>
              {isDelivery && (
                <>
                  <Input
                    placeholder="Nome"
                    name="nome"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Número de telefone"
                    name="numero"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Bairro"
                    name="bairro"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Rua"
                    name="rua"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Número da residência"
                    name="residencia"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Ponto de referência"
                    name="referencia"
                    onChange={handleChange}
                    className="mb-2"
                  />
                </>
              )}
              <Button
                onClick={sendOrder}
                className="mt-2 w-full"
                disabled={!isDelivery || !isDeliveryFormValid()}
              >
                Fazer pedido
              </Button>
            </DialogContent>
          </Dialog>
        </SheetContent>
      </Sheet>
    </header>
  );
}
