import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.style';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
