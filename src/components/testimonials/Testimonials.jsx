import React from "react";
import './testimonials.scss';

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Eminem",
          title: "Rapper",
          img: 'assets/eminem.jpeg',
          icon: "assets/twitter.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "Dr. Dre",
          title: "Producer",
          img: 'assets/dre.jpeg',
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "50",
          title: "Rapper",
          img: 'assets/50gta.jpg',
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d => (
                <div key={d.id} className={d.featured ? 'card featured' : 'card'}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left"></img>
                        <img 
                            src={d.img}
                            className="user"></img>
                        <img src={d.icon} className="right"></img>
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h3>{d.title}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
);

}