import React, { useState } from 'react'
import {GifGrid, AddCategory} from "./components"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

        {
          categories.map((cat) => (
            <GifGrid 
              key={cat}
              category={cat}
            />
          ))
        }
    </>
  )
}
