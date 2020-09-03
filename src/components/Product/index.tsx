import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";
import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsun</p>
        <p className="description">
          Receba o produto ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedo</p>
        <p className="description">1 dia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia itaque
      tempora voluptate omnis veniam non nobis quasi aliquam cumque. Iste
      accusantium natus recusandae officiis hic tempore inventore quis est!
      Molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
      at! Commodi consectetur ipsa veniam laboriosam impedit neque voluptatibus
      quas soluta? Vero eaque sequi nam voluptates accusamus, sed ullam corporis
      ratione!
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia itaque
      tempora voluptate omnis veniam non nobis quasi aliquam cumque. Iste
      accusantium natus recusandae officiis hic tempore inventore quis est!
      Molestiae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
      at! Commodi consectetur ipsa veniam laboriosam impedit neque voluptatibus
      quas soluta? Vero eaque sequi nam voluptates accusamus, sed ullam corporis
      ratione!
    </p>
  </Description>
);

export default Product;
