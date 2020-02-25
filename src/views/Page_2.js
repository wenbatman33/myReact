import React from 'react';

export default class Page_2 extends React.Component {
  constructor(props) {
    super(props);
    const products = {
      data: {
        "productItem":[
          {
            "title": "Nike Air Max 90 Premium",
            "subtitle": "鞋款",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/fb9f2650-96e9-4a8c-b893-070cce5ededb/air-max-90-premium-款-ZJmChh.jpg"
          },
          {
            "title": "Nike Air Max 90 Premium",
            "subtitle": "鞋款",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/ce6b3c87-ddcd-4b45-bba2-5ec92c8d1dd1/air-max-90-premium-款-5DB14w.jpg"
          },
          {
            "title": "Nike Air Max 97",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/hsbbi3yac0t8ski7qkcp/air-max-97-男-cNRrFt.jpg"
          },
          {
            "title": "Nike Air Max 97",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/59bcabf3-cceb-4d2f-a9ad-381692317ed8/air-max-97-男-cNRrFt.jpg"
          },
          {
            "title": "Nike Air Max 97",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/c5f3ztit4bzxyxlyt1nl/air-max-97-男-cNRrFt.jpg"
          },
          {
            "title": "Nike Air Max 97",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/pkso7dypcnsnt4ewds1q/air-max-97-男-cNRrFt.jpg"
          },
          {
            "title": "air-max-97-男-cNRrFt",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/gxtrp4fhsu64uj0nelfj/air-max-97-男-cNRrFt.jpg"
          },
          {
            "title": "air-max-97-男-EBZrb8",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/ik0kvc7uo6rqnwsy9vbq/air-max-97-男-EBZrb8.jpg"
          },
          {
            "title": "air-max-97-男-EBZrb8",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/ndfbpzstq3aildfh6gv5/air-max-97-男-EBZrb8.jpg"
          },
          {
            "title": "air-max-97-男-EBZrb8",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/wghgvfhpapyzhna27ylx/air-max-97-男-EBZrb8.jpg"
          },
          {
            "title": "LeBron 7",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/uliiuq2co8boook4vocb/lebron-7-男-H6xd1N.jpg"
          },
          {
            "title": "Nike Air Max 270 React ENG",
            "subtitle": "男鞋",
            "squarishURL": "https://c.static-nike.com/a/images/t_default/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-男-7V4Lw2.jpg"
          }
        ]
      }
    }
    this.state={
      products: products
    }
  }

  render() {
    console.log(this.state.products);
    return (
      <div className='container'>      
        <h1>item.title</h1>
        <div className='row'>
          {
            this.state.products.data.productItem.map((item, index) =>{
              return(
                <div className='col-3' key={index}>
                  <p>{item.title}</p>
                  <p>
                    <small>{item.subtitle}</small>
                  </p>
                  <img className='p_img' src={item.squarishURL} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
