const insertData = () => {
  fetch('https://zodiac-silk.vercel.app/api/createOrder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customerName: 'John Doe',
      items: [
        {
          name: 'Item 1',
          price: 10.99,
        },
        {
          name: 'Item 2',
          price: 5.99,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default insertData;
