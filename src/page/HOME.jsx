import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

function home () {
    return (
      <>
        <div className="top_bar">
          <h1> React μνμ½λ© </h1>
        </div>
        <Box className="home-box">
          <h2> π React! </h2>
          <ul>
            <li>
              <Link to='/page/class_one/index' className="home-a"> π 01κ° μμμκ° </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_two/index' className="home-a"> π 02κ° κ³΅λΆ μ λ΅ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_three/index' className="home-a"> π 03κ° κ°λ°νκ²½μ μ’λ₯ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_four/index' className="home-a"> π 04κ° npmμ μ΄μ©ν΄μ create react app μ€μΉ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_five/index' className="home-a"> π 05κ° create react appμ μ΄μ©ν΄μ κ°λ°νκ²½κ΅¬μΆ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_six/index' className="home-a"> π 06κ° μν μΉμ± μ€ν </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_seven/index' className="home-a"> π 07κ° JS μ½λ©νλ λ² </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_eight/index' className="home-a"> π 08κ° cssμ½λ©νλ λ² </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_nine/index' className="home-a"> π 09κ° λ°°ν¬νλ λ² </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_ten/index' className="home-a"> π 10κ° λ¦¬μ‘νΈκ° μλ€λ©΄ </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_eleven/index' className="home-a"> π 11_1κ° μ»΄ν¬λνΈ λ§λ€κΈ°1 </Link> <ArrowForward className="box-arrow" />
            </li>
            <li>
              <Link to='/page/class_eleven_two/index' className="home-a"> π 11_2κ° μ»΄ν¬λνΈ λ§λ€κΈ° 2 </Link> <ArrowForward className="box-arrow" />
            </li>

          </ul>
        </Box>
        <Box className='home-box'>
          <h2> π© λ²μΈ </h2>
          <ul>
            <li>
              <Link to='/page/class_codemirror/index' className="home-a"> π  μ½λ λ―Έλ¬ μ°λ λ² </Link> <ArrowForward className="box-arrow" />
            </li>
          </ul>
        </Box>
      </>
    );
  };
  
  export default home;
  