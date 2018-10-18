import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Button from "./components/button";
import Paragraph from "./components/paragraph";
import Title from "./components/title";
import Checkbox_list from "./components/checkbox-list/checkbox-list";

const titulo = "Instrucões";
//TODO Arrumar paragrafos do textos.
const instrucoes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec congue sit amet nisl eget tincidunt. Donec nunc magna, sagittis nec mi ac, semper finibus massa. Ut hendrerit velit ligula, id euismod leo facilisis in. Nullam suscipit dolor ac malesuada gravida. Nunc ante tellus, condimentum vitae lobortis nec, auctor nec felis. Praesent porttitor, tortor et aliquet sodales, quam lorem tempus magna, a molestie urna nulla ac elit. Duis nec aliquet massa. Aenean auctor lacus enim, eget bibendum augue feugiat in. Integer blandit dolor lobortis libero gravida facilisis. Nullam a ultrices nulla, at ornare nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam finibus enim tellus, volutpat hendrerit est convallis quis. Sed rutrum aliquam auctor. Fusce at cursus elit, a finibus libero. Aenean viverra venenatis felis, at porta nisl scelerisque ac. Aliquam mauris metus, euismod sit amet urna ut, dapibus condimentum lacus. Quisque urna mi, maximus vel nunc congue, luctus congue turpis. Donec venenatis, dolor sed pharetra iaculis, enim mi consectetur nisi, vitae dignissim sapien orci quis enim. In quis sem nunc. Sed sed velit eros. In pharetra sapien non faucibus luctus. Morbi aliquet sagittis risus at fermentum. Sed porttitor leo sem, vitae facilisis velit tempor eu. Suspendisse potenti. Pellentesque ac augue eget purus blandit consequat. Cras fringilla diam vitae tellus lobortis, et rhoncus felis tempus. Cras finibus faucibus scelerisque. Phasellus ac lorem tristique, semper ligula sit amet, efficitur nunc. Ut eu diam viverra, fringilla turpis eu, pharetra turpis. Cras quis purus vel libero bibendum rhoncus ut euismod nulla. Donec sed odio tincidunt, congue velit vel, sollicitudin orci. Vivamus eget mollis lectus. Morbi a nisl purus. Etiam scelerisque finibus dolor a vestibulum. Nulla facilisi. Nullam ut porta neque. Praesent semper magna orci, id malesuada nibh lobortis nec. Aliquam ornare mauris fermentum vulputate mattis. Sed quis lobortis turpis. Aliquam vitae ullamcorper tellus. Vivamus interdum, purus vitae pharetra sollicitudin, elit augue pulvinar nunc, vitae mattis sapien libero eu velit. Ut lobortis blandit orci, vel pharetra diam tincidunt non. Phasellus tristique, odio et cursus semper, metus eros ullamcorper augue, quis efficitur nunc justo ac magna. Quisque vitae lacinia mi, ut pulvinar dolor. Fusce aliquet suscipit varius. Curabitur sed mattis lacus, eget tincidunt nunc. Suspendisse tristique ligula ac vestibulum luctus. Fusce semper elit et viverra pulvinar. Duis egestas mattis egestas. Curabitur fermentum lectus augue, rhoncus tincidunt augue laoreet a. Praesent porttitor sollicitudin varius. Cras ornare nulla purus, eget sollicitudin mi egestas id. Donec ligula diam, cursus id malesuada et, suscipit id enim. Phasellus et volutpat erat. Aliquam odio nunc, dapibus id rhoncus id, pulvinar et risus. ";

//Botão iniciar
ReactDOM.render(
  <Button text={"Iniciar"} />,
  document.getElementById("button-div")
);
ReactDOM.render(
  <Paragraph paragraph={instrucoes} />,
  document.getElementById("paragraph-div")
);

ReactDOM.render(
  <Title alignment={"text-center"} title={titulo} />,
  document.getElementById("title-div")
);

ReactDOM.render(
  <Checkbox_list generos ={["Terror", "Drama", "Ação"]}/>,
  document.getElementById("checkboxlist")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
