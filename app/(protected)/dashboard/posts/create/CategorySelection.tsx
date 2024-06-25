import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Category } from "@/types";
import { XIcon } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

interface CategorySelectionProps {
  selectedCategories: Category[];
  setSelectedCategories: Dispatch<SetStateAction<Category[]>>;
  categories: Category[];
}
export default function CategorySelection({
  selectedCategories,
  setSelectedCategories,
  categories,
}: CategorySelectionProps) {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  const addselectedCategories = (selected: Category) => {
    // Check if the category is already selected
    setSelectedCategories((prev) => {
      // Check if the category is already selected
      const isAlreadySelected = prev.some(
        (category) => category.id === selected.id,
      );

      if (isAlreadySelected) {
        // Remove the selected category
        return prev.filter((category) => category.id !== selected.id);
      } else {
        // Add the selected category
        const updatedCategories = [...prev, selected];

        // Close the category menu if 3 categories are selected
        if (updatedCategories.length === 3) {
          setCategoryMenuOpen(false);
        }

        return updatedCategories;
      }
    });
  };

  const removeselectedCategories = (selected: Category) => {
    setSelectedCategories((prev) => {
      return prev.filter((category) => category.id !== selected.id);
    });
  };

  // handle trigger menu
  const handleTriggerMenu = () => {
    setCategoryMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative mt-6 w-full px-4 sm:container">
        <ul className="flex flex-wrap gap-4">
          {selectedCategories && selectedCategories.length > 0 && (
            <>
              {selectedCategories.map((category) => {
                return (
                  <>
                    <div key={category.id}>
                      <Button
                        variant="secondary"
                        className={`cursor-default ${!selectedCategories.includes(category) ? "bg-muted-foreground/10 hover:bg-muted-foreground/15" : "bg-primary text-white hover:bg-primary/90"}`}
                      >
                        {category.categoryName}
                        <XIcon
                          strokeWidth={1}
                          size={15}
                          className="ml-2 cursor-pointer"
                          onClick={() => removeselectedCategories(category)}
                        />
                      </Button>
                    </div>
                  </>
                );
              })}
            </>
          )}
          <li>
            <Button
              variant="ghost"
              className="p-0 text-base font-normal text-muted-foreground hover:bg-transparent"
              disabled={selectedCategories.length === 3}
              onClick={handleTriggerMenu}
            >
              เพิ่มหมวดหมู่ ({selectedCategories.length}/3)
            </Button>
          </li>
        </ul>

        {categoryMenuOpen && selectedCategories.length !== 3 && (
          <>
            <div
              className="fixed inset-0 z-50 bg-opacity-0"
              onClick={() => setCategoryMenuOpen(false)}
            ></div>
            <div className="px-4 sm:container">
              <div className="absolute inset-x-0 top-full z-50 mx-8 mt-4 rounded-md border bg-background p-5">
                <p className="mb-4 text-xl font-semibold">รายการหมวดหมู่</p>
                <Separator />
                <div className="mt-6 flex flex-wrap gap-2">
                  {categories && categories.length > 0 && (
                    <>
                      {categories.map((category) => {
                        return (
                          <>
                            <div key={category.id}>
                              <Button
                                variant="secondary"
                                className={`${!selectedCategories.includes(category) ? "bg-muted-foreground/10 hover:bg-muted-foreground/15" : "bg-primary text-white hover:bg-primary/90"}`}
                                onClick={() => addselectedCategories(category)}
                              >
                                {category.categoryName}
                              </Button>
                            </div>
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
