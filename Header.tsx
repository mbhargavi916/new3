import * as React from "react";

import "./Header.css";

export function Header() {
  return (
    <div className="info">
      <ul>
        <li>
          <a href="https://www.google.nl/search?q=html+css&source=lmns&bih=754&biw=1519&safe=active&hl=en&ved=2ahUKEwiLl8ibpc3pAhXWOewKHfC2DTcQ_AUoAHoECAEQAA">
            ALL
          </a>
        </li>
        <li>images</li>
        <li>
          <a href="https://www.google.nl/search?q=html+css&source=lmns&tbm=vid&bih=754&biw=1519&safe=active&hl=en&ved=2ahUKEwiLl8ibpc3pAhXWOewKHfC2DTcQ_AUoAnoECAEQAg">
            vedios
          </a>
        </li>
        <li>
          <a href="https://www.google.nl/search?q=html+css&source=lmns&tbm=nws&bih=754&biw=1519&safe=active&hl=en&ved=2ahUKEwiLl8ibpc3pAhXWOewKHfC2DTcQ_AUoA3oECAEQAw">
            news
          </a>
        </li>
        <li>
          <a href="https://www.google.nl/search?q=html+css&source=lmns&tbm=shop&bih=754&biw=1519&safe=active&hl=en&ved=2ahUKEwiLl8ibpc3pAhXWOewKHfC2DTcQ_AUoBHoECAEQBA">
            shopping
          </a>
        </li>
        <li>more</li>
        <li>
          <a href="https://www.google.nl/preferences">settings</a>
        </li>
        <li>Tools</li>
      </ul>
    </div>
  );
}
