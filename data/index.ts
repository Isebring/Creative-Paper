export interface Product {
  id: string;
  image: string;
  secondImage: string;
  title: string;
  description: string;
  summary: string[];
  price: number;
  rating: number;
  usersRated: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: '1',
    image:
      'https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fwww.papier.com%252Fproduct_image%252F90348%252F36%252Fwildflower-22590_front_1680777957.png%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Dfbf27af9c76f530fb146420170981a0e?ixlib=rb-3.2.1&w=700&auto=format%2Ccompress&s=f6d74b85151d69884edd50ba879631eb',
    title: 'Wildflower',
    description:
      'The possibilities of a new notebook are endless. Whether it becomes a space for grand ideas, little reminders or anything that inspires you throughout the day. Decide if you’d like lined, dotted or plain pages inside and then personalize your cover with a name, fun title, your alter ego or a special quote – the page is yours.',
    summary: ["6\" x 8.5\"",
      "96 leaves (192 sides) of lined paper.",
      "Line height: 0.3\""],
    price: 30.0,
    rating: 4.5,
    usersRated: 7,
    secondImage:
      'https://papier.imgix.net/https%3A%2F%2Fd1o785do8fyxgx.cloudfront.net%2Fproduct%2Fproduct_images%2Fimages%2F000%2F002%2F501%2Foriginal%2F1022_PMTEST_Wildflower_Generic_Resized.jpg%3F1665401173?ixlib=rb-3.2.1&w=700&auto=format%2Ccompress&s=8644b53c80f4bbf2f3287972643c3cf2',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'PowerBook 13',
    description:
      'The PowerBook 13 is the perfect laptop for students and creative professionals. With its compact size and powerful performance, you can take your work wherever you go. The 13-inch Retina display delivers crisp and clear visuals, while the powerful processor ensures speedy performance.',
    summary: [
      'Perfect for studying',
      '13-inch Retina display',
      'Powerful processor',
    ],
    price: 3919,
    rating: 3.2,
    usersRated: 5,
    secondImage:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
    title: 'GamingBook Pro',
    description:
      'The GamingBook Pro is the ultimate gaming machine for hardcore gamers. With its powerful graphics card and lightning-fast processor, you can play the latest games at the highest settings. The 17-inch Full HD display delivers immersive visuals, while the backlit keyboard ensures you can keep gaming even in low light.',
    summary: [
      'Ideal for gaming',
      '17-inch Full HD display',
      'Backlit keyboard',
    ],
    price: 2299,
    rating: 3.8,
    usersRated: 3,
    secondImage:
      'https://img.freepik.com/free-photo/desk-arrangement-with-laptop-top-view_23-2149073069.jpg?w=1060&t=st=1679504654~exp=1679505254~hmac=de6d45ec753c07e4f7fdadf7a4d0ddceb1c859e23f0cbc0610c802607a7a74f7',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'BookAir S',
    description:
      'The BookAir S is the perfect laptop for those who value style and portability. With its slim and lightweight design, you can take it with you wherever you go. The 14-inch Full HD display delivers stunning visuals, while the long-lasting battery ensures you can work or play all day.',
    summary: [
      'Slim and lightweight design',
      '14-inch Full HD display',
      'Long-lasting battery',
    ],
    price: 1299,
    rating: 4.2,
    usersRated: 8,
    secondImage:
      'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'WorkBook Plus',
    description:
      'The WorkBook Plus is the ultimate workstation for professionals who need to run demanding applications. With its powerful hardware and spacious 17-inch display, you can work on multiple projects at once without any lag. The workstation also features a backlit keyboard for typing in low light conditions.',
    summary: [
      'Multiple projects at once',
      'Spacious 17-inch display',
      'Backlit keyboard',
    ],
    price: 999,
    rating: 3.5,
    usersRated: 2,
    secondImage:
      'https://img.freepik.com/free-photo/desk-arrangement-with-laptop_23-2148868097.jpg?w=1800&t=st=1679500147~exp=1679500747~hmac=0f4e357fe2db14c7e1593ab096de21f1d6c9c605831fd4614f6af5af84c83577',
  },
  {
    id: '6',
    image:
      'https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'TravelBook Mini',
    description:
      'The TravelBook Mini is the perfect laptop for those who are always on-the-go. With its compact size and long-lasting battery, you can take it with you wherever you go. The 11-inch display delivers crisp visuals, while the lightweight design ensures you can carry it with ease.',
    summary: ['Long-lasting battery', '11-inch display', 'Lightweight design'],
    price: 5499,
    rating: 4.9,
    usersRated: 4,
    secondImage:
      'https://img.freepik.com/free-photo/laptop-kitchen_23-2147772848.jpg?t=st=1679502360~exp=1679502960~hmac=19c1e45280a8553e89358b6dc9bb8d029d3e6d9cae70d083ae857e0b87c1fcf9',
  },
];
