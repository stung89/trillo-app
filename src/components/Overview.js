import React from 'react';
import Icon from '../components/Icon';

const Overview = () => (
    <div>
        <div className="overview">
            <h1 className="overview__title">
                hotel las palmas
            </h1>
            <div className="overview__stars">
                <Icon name="icon-star" />
                <Icon name="icon-star" />
                <Icon name="icon-star" />
                <Icon name="icon-star" />
                <Icon name="icon-star" />
            </div>

            <div className="overview__location">
                <Icon name="icon-location-pin" />
                <button className="btn-inline">Albufeira, Portugal</button>
            </div>

            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className="list">
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Close to the beach
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Breakfast included
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Free airport shuttle
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Free wifi in all room
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Air conditioning and heating
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Pets allowed
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        We speak all languages
                    </li>
                    <li className="list__item">
                        <span className="right-padding">
                            <Icon name="icon-chevron-thin-right"/>
                        </span>
                        Perfect for families
                    </li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">
                        Lucy and 3 other friends recommend this hotel.
                    </p>
                    <div className="recommend__friends">
                    <img src="images/user-3.jpg" alt="Friend 1" className="recommend__photo"/>
                    <img src="images/user-4.jpg" alt="Friend 2" className="recommend__photo"/>
                    <img src="images/user-5.jpg" alt="Friend 3" className="recommend__photo"/>
                    <img src="images/user-6.jpg" alt="Friend 4" className="recommend__photo"/>
                    </div>
                </div>
            </div>
            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review__user">
                        <img src="images/user-1.jpg" alt="User 1" className="review__photo"/>
                        <div className="review__user-box">
                            <p className="review__user-name">John Smith</p>
                            <p className="review__user-date">May 10, 2018</p>
                        </div>
                        <div className="review__rating">7.8</div>
                    </figcaption>
                </figure>
                <figure className="review">
                    <blockquote className="review__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.                    </blockquote>
                    <figcaption className="review__user">
                        <img src="images/user-2.jpg" alt="User 1" className="review__photo"/>
                        <div className="review__user-box">
                            <p className="review__user-name">Rose Tyler</p>
                            <p className="review__user-date">March 10, 2018</p>
                        </div>
                        <div className="review__rating">7.8</div>
                    </figcaption>
                </figure>

                <button className="btn-inline">Show all<span>&rarr;</span></button>
            </div>
        </div>
        <div className="cta">
            <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <button className="btn">
                <span className="btn__visible">Book now</span>
                <span className="btn__invisible">Only 4 rooms left</span>
            </button>
        </div>
    </div>
);

export default Overview;