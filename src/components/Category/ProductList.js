import React, { useContext, useState } from 'react';
import Product from '../Product/Product';
import Title from '../Layout/Title';
import { Container, Row } from 'reactstrap';
import { ProductContext } from '../../ProductContext';

const ProductList = () => {
  const products = useContext(ProductContext).megaState.productList;

  console.log(localStorage.getItem('category'));

  let result = products.filter(products => products.category == localStorage.getItem('category'));

  // const [filteredList, setFilteredList] = useState([])

  // setFilteredList(products)
  if(localStorage.getItem('category') == '')
    result = products;
  
  return (
    <>
      <Container>
        <Title name="our" title="products" />
        <Row className="mt-3 mb-3">
          { result.map(item => (
            <Product key={item.id} product={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
