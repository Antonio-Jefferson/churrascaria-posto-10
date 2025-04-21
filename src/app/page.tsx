"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartItem, MenuItem } from "./@types/types";
import { categories, menu, pizzaFlavors } from "./mocks/mocks";
import Header from "./components/Header";

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [pizzaFlavor1, setPizzaFlavor1] = useState<string>("");
  const [pizzaFlavor2, setPizzaFlavor2] = useState<string>("");
  const [useTwoFlavors, setUseTwoFlavors] = useState<boolean>(false);

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCategory = (categoryId: string) => {
    const section = categoryRefs.current[categoryId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addToCart = (item: MenuItem, flavors?: string[]) => {
    setCart((prev) => {
      const exists = prev.find(
        (i) =>
          i.id === item.id &&
          JSON.stringify(i.flavors) === JSON.stringify(flavors)
      );
      if (exists) {
        return prev.map((i) =>
          i.id === item.id &&
          JSON.stringify(i.flavors) === JSON.stringify(flavors)
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...item, qty: 1, flavors }];
    });
  };

  const handleAddPizza = () => {
    if (selectedItem && pizzaFlavor1) {
      const flavors =
        useTwoFlavors && pizzaFlavor2
          ? [pizzaFlavor1, pizzaFlavor2]
          : [pizzaFlavor1];
      addToCart(selectedItem, flavors);
      setSelectedItem(null);
      setPizzaFlavor1("");
      setPizzaFlavor2("");
      setUseTwoFlavors(false);
    }
  };

  return (
    <main className="p-6 relative">
      <div className="flex flex-col fixed w-full left-0 top-0 px-4 pt-4 bg-white">
        <Header cart={cart} setCart={setCart} />

        {/* Botões de Categoria */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => scrollToCategory(category.id)}
              className="flex-shrink-0 w-max"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent>
          {selectedItem && (
            <>
              <DialogTitle>{selectedItem.name}</DialogTitle>

              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={400}
                height={300}
                className="rounded-md object-cover mx-auto"
              />

              {selectedItem.description && (
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {selectedItem.description}
                </p>
              )}

              <p className="text-center font-semibold mt-2">
                R$ {selectedItem.price.toFixed(2)}
              </p>

              {selectedItem.category === "pizzas" ? (
                <>
                  <div className="mb-4">
                    <Select
                      onValueChange={setPizzaFlavor1}
                      value={pizzaFlavor1}
                    >
                      <SelectTrigger className="mb-2">
                        <SelectValue placeholder="Escolha o primeiro sabor" />
                      </SelectTrigger>
                      <SelectContent>
                        {pizzaFlavors.map((flavor) => (
                          <SelectItem key={flavor.id} value={flavor.nome}>
                            {flavor.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {/* Mostrar descrição depois da escolha */}
                    {pizzaFlavor1 && (
                      <div className="mt-2 p-2 rounded bg-muted text-sm text-muted-foreground">
                        {
                          pizzaFlavors.find(
                            (flavor) => flavor.nome === pizzaFlavor1
                          )?.descricao
                        }
                      </div>
                    )}
                  </div>

                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={useTwoFlavors}
                      onChange={(e) => setUseTwoFlavors(e.target.checked)}
                    />
                    Quero dois sabores
                  </label>

                  {useTwoFlavors && (
                    <div className="mb-4">
                      <Select
                        onValueChange={setPizzaFlavor2}
                        value={pizzaFlavor2}
                      >
                        <SelectTrigger className="mb-2">
                          <SelectValue placeholder="Escolha o segundo sabor" />
                        </SelectTrigger>
                        <SelectContent>
                          {pizzaFlavors.map((flavor) => (
                            <SelectItem key={flavor.id} value={flavor.nome}>
                              {flavor.nome}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {/* Mostrar descrição do sabor selecionado */}
                      {pizzaFlavor2 && (
                        <div className="mt-2 p-2 rounded bg-muted text-sm text-muted-foreground">
                          {
                            pizzaFlavors.find(
                              (flavor) => flavor.nome === pizzaFlavor2
                            )?.descricao
                          }
                        </div>
                      )}
                    </div>
                  )}

                  <Button
                    className="mt-4 w-full"
                    onClick={handleAddPizza}
                    disabled={!pizzaFlavor1 || (useTwoFlavors && !pizzaFlavor2)}
                  >
                    Adicionar à sacola
                  </Button>
                </>
              ) : (
                <Button
                  className="mt-4 w-full"
                  onClick={() => {
                    addToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                >
                  Adicionar à sacola
                </Button>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="mt-26">
        {/* Seções por Categoria */}
        {categories.map((category) => (
          <div
            key={category.id}
            className="mb-8"
            ref={(el) => {
              categoryRefs.current[category.id] = el;
            }}
          >
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {menu
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <Card key={item.id} className="cursor-pointer">
                    <CardContent
                      className="p-4"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="rounded-md object-cover mx-auto mb-2"
                      />
                      <h2 className="text-lg font-semibold text-center">
                        {item.name}
                      </h2>
                      <p className="text-sm text-muted-foreground text-center">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
