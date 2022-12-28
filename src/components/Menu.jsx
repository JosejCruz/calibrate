import React, { useState } from "react";
import GraficaPlotly from "./GraficaPlotly";

function Menu() {
  const [valores1, setValores1] = useState(0);

  const HandleValores = (e) => {
    setValores1(parseInt(e.target.value));
    console.log(valores1);
  };
  return (
    <div>
      <GraficaPlotly datos={valores1} />
      <hr />
      <label htmlFor="Valores">GAMMA No. ${valores1}</label>
      <hr />
      <input type="color" value="#ff0000" disabled={true}/>
      <select onChange={HandleValores} name="gamma1" id="gamma1">
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="36">36</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="47">47</option>
      </select>
    </div>
  );
}

export default Menu;
