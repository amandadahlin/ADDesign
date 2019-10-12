import React, {Component} from "react"
import {map} from "lodash"
import './Inspiration.css'

const inspirationPhotos = () => {
    return ([
        {
            url: "http://www.rebeccajuddloves.com/wp-content/uploads/2016/10/Judd_HintonLane8021.jpg",
            description: "Fantastisk illustration som passar som om den vore skapat för just Lars Larssons vardagsrum"
        },
        {
            url: "http://www.artfusionproductions.com.au/files/1891429/uploaded/galaxybondibeach.JPG",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            url: "http://www.canvasbutik.se/shop/26809/art9/h0133/24730133-origpic-3c2282.jpg",
            description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }
    ]);
}

class Inspiration extends Component {
    render() {
        const inspo = inspirationPhotos();
        const inspiration = map(inspo, painting => {
            return (
                <div>
                    <img
                        src={painting.url}
                        width="80%"
                        className="inspiration"
                        alt={painting.description}
                    />
                    <p className="caption">{painting.description}</p>
                    <hr/>
                </div>
            )
        });

        return (
            <div className="body">
                <h1 className="header">Inspiration</h1>
                <p className="info">Här kan du se hur kunder dekorerat med sina tavlor från ADDesign</p>
                <hr />
                {inspiration}
            </div>
        );
    }
}

export default Inspiration;
