import React, { useContext } from "react";
import "./AllRecipes.css";
import { useNavigate } from "react-router-dom";
import recipe_image from "../assets/image.png";
import { provideStateContext } from "../App";
const AllRecipes = () => {
  const navigate = useNavigate();

const recipes = useContext(provideStateContext);
  function goToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="Header1 ">
        <div className="upper-container">
          <p>
            <svg
              width="182"
              height="31"
              viewBox="0 0 182 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0227273 23.5V0.227272H15.4318V4.28409H4.94318V9.82955H14.4091V13.8864H4.94318V23.5H0.0227273ZM64.3324 23.7841C63.0066 23.7841 61.8059 23.4432 60.7301 22.7614C59.6619 22.072 58.8134 21.0606 58.1847 19.7273C57.5634 18.3864 57.2528 16.7424 57.2528 14.7955C57.2528 12.7955 57.5748 11.1326 58.2188 9.80682C58.8627 8.47348 59.7188 7.47727 60.7869 6.81818C61.8627 6.15152 63.0407 5.81818 64.321 5.81818C65.2983 5.81818 66.1127 5.98485 66.7642 6.31818C67.4233 6.64394 67.9536 7.05303 68.3551 7.54545C68.7642 8.0303 69.0748 8.50758 69.2869 8.97727H69.4347V0.227272H74.2642V23.5H69.4915V20.7045H69.2869C69.0597 21.1894 68.7377 21.6705 68.321 22.1477C67.9119 22.6174 67.3778 23.0076 66.7188 23.3182C66.0672 23.6288 65.2718 23.7841 64.3324 23.7841ZM65.8665 19.9318C66.6468 19.9318 67.3059 19.7197 67.8438 19.2955C68.3892 18.8636 68.8059 18.2614 69.0938 17.4886C69.3892 16.7159 69.5369 15.8106 69.5369 14.7727C69.5369 13.7348 69.393 12.8333 69.1051 12.0682C68.8172 11.303 68.4006 10.7121 67.8551 10.2955C67.3097 9.87879 66.6468 9.67045 65.8665 9.67045C65.071 9.67045 64.4006 9.88636 63.8551 10.3182C63.3097 10.75 62.8968 11.3485 62.6165 12.1136C62.3362 12.8788 62.196 13.7652 62.196 14.7727C62.196 15.7879 62.3362 16.6856 62.6165 17.4659C62.9044 18.2386 63.3172 18.8447 63.8551 19.2841C64.4006 19.7159 65.071 19.9318 65.8665 19.9318ZM81.233 30.0455C80.6193 30.0455 80.0436 29.9962 79.5057 29.8977C78.9754 29.8068 78.536 29.6894 78.1875 29.5455L79.2784 25.9318C79.8466 26.1061 80.358 26.2008 80.8125 26.2159C81.2746 26.2311 81.6723 26.125 82.0057 25.8977C82.3466 25.6705 82.6231 25.2841 82.8352 24.7386L83.1193 24L76.858 6.04545H81.9489L85.5625 18.8636H85.7443L89.392 6.04545H94.517L87.733 25.3864C87.4072 26.3258 86.964 27.1439 86.4034 27.8409C85.8504 28.5455 85.1496 29.0871 84.3011 29.4659C83.4527 29.8523 82.4299 30.0455 81.233 30.0455ZM104.241 23.5V20.5795L115.855 4.28409H104.219V0.227272H122.037V3.14773L110.412 19.4432H122.06V23.5H104.241ZM150.21 13.4091V23.5H145.369V6.04545H149.983V9.125H150.188C150.574 8.10985 151.222 7.30682 152.131 6.71591C153.04 6.11742 154.142 5.81818 155.438 5.81818C156.65 5.81818 157.706 6.08333 158.608 6.61364C159.509 7.14394 160.21 7.90151 160.71 8.88636C161.21 9.86364 161.46 11.0303 161.46 12.3864V23.5H156.619V13.25C156.627 12.1818 156.354 11.3485 155.801 10.75C155.248 10.1439 154.487 9.84091 153.517 9.84091C152.866 9.84091 152.29 9.98106 151.79 10.2614C151.297 10.5417 150.911 10.9508 150.631 11.4886C150.358 12.0189 150.218 12.6591 150.21 13.4091ZM173.23 23.8409C171.435 23.8409 169.889 23.4773 168.594 22.75C167.306 22.0152 166.313 20.9773 165.616 19.6364C164.92 18.2879 164.571 16.6932 164.571 14.8523C164.571 13.0568 164.92 11.4811 165.616 10.125C166.313 8.76894 167.295 7.71212 168.56 6.95454C169.832 6.19697 171.325 5.81818 173.037 5.81818C174.188 5.81818 175.26 6.00379 176.253 6.375C177.253 6.73864 178.124 7.28788 178.866 8.02273C179.616 8.75758 180.2 9.68182 180.616 10.7955C181.033 11.9015 181.241 13.197 181.241 14.6818V16.0114H166.503V13.0114H176.685C176.685 12.3144 176.533 11.697 176.23 11.1591C175.927 10.6212 175.507 10.2008 174.969 9.89773C174.438 9.58712 173.821 9.43182 173.116 9.43182C172.382 9.43182 171.73 9.60227 171.162 9.94318C170.601 10.2765 170.162 10.7273 169.844 11.2955C169.526 11.8561 169.363 12.4811 169.355 13.1705V16.0227C169.355 16.8864 169.514 17.6326 169.832 18.2614C170.158 18.8902 170.616 19.375 171.207 19.7159C171.798 20.0568 172.499 20.2273 173.31 20.2273C173.848 20.2273 174.34 20.1515 174.787 20C175.234 19.8485 175.616 19.6212 175.935 19.3182C176.253 19.0152 176.495 18.6439 176.662 18.2045L181.139 18.5C180.912 19.5758 180.446 20.5152 179.741 21.3182C179.045 22.1136 178.143 22.7348 177.037 23.1818C175.938 23.6212 174.67 23.8409 173.23 23.8409Z"
                fill="white"
              />
              <path
                d="M26.5369 23.8409C24.7718 23.8409 23.2453 23.4659 21.9574 22.7159C20.6771 21.9583 19.6884 20.9053 18.9915 19.5568C18.2945 18.2008 17.946 16.6288 17.946 14.8409C17.946 13.0379 18.2945 11.4621 18.9915 10.1136C19.6884 8.75758 20.6771 7.70454 21.9574 6.95454C23.2453 6.19697 24.7718 5.81818 26.5369 5.81818C28.3021 5.81818 29.8248 6.19697 31.1051 6.95454C32.393 7.70454 33.3854 8.75758 34.0824 10.1136C34.7794 11.4621 35.1278 13.0379 35.1278 14.8409C35.1278 16.6288 34.7794 18.2008 34.0824 19.5568C33.3854 20.9053 32.393 21.9583 31.1051 22.7159C29.8248 23.4659 28.3021 23.8409 26.5369 23.8409ZM26.5597 20.0909C27.3627 20.0909 28.0331 19.8636 28.571 19.4091C29.1089 18.947 29.5142 18.3182 29.7869 17.5227C30.0672 16.7273 30.2074 15.822 30.2074 14.8068C30.2074 13.7917 30.0672 12.8864 29.7869 12.0909C29.5142 11.2955 29.1089 10.6667 28.571 10.2045C28.0331 9.74242 27.3627 9.51136 26.5597 9.51136C25.7491 9.51136 25.0672 9.74242 24.5142 10.2045C23.9688 10.6667 23.5559 11.2955 23.2756 12.0909C23.0028 12.8864 22.8665 13.7917 22.8665 14.8068C22.8665 15.822 23.0028 16.7273 23.2756 17.5227C23.5559 18.3182 23.9688 18.947 24.5142 19.4091C25.0672 19.8636 25.7491 20.0909 26.5597 20.0909ZM46.1619 23.8409C44.3968 23.8409 42.8703 23.4659 41.5824 22.7159C40.3021 21.9583 39.3134 20.9053 38.6165 19.5568C37.9195 18.2008 37.571 16.6288 37.571 14.8409C37.571 13.0379 37.9195 11.4621 38.6165 10.1136C39.3134 8.75758 40.3021 7.70454 41.5824 6.95454C42.8703 6.19697 44.3968 5.81818 46.1619 5.81818C47.9271 5.81818 49.4498 6.19697 50.7301 6.95454C52.018 7.70454 53.0104 8.75758 53.7074 10.1136C54.4044 11.4621 54.7528 13.0379 54.7528 14.8409C54.7528 16.6288 54.4044 18.2008 53.7074 19.5568C53.0104 20.9053 52.018 21.9583 50.7301 22.7159C49.4498 23.4659 47.9271 23.8409 46.1619 23.8409ZM46.1847 20.0909C46.9877 20.0909 47.6581 19.8636 48.196 19.4091C48.7339 18.947 49.1392 18.3182 49.4119 17.5227C49.6922 16.7273 49.8324 15.822 49.8324 14.8068C49.8324 13.7917 49.6922 12.8864 49.4119 12.0909C49.1392 11.2955 48.7339 10.6667 48.196 10.2045C47.6581 9.74242 46.9877 9.51136 46.1847 9.51136C45.3741 9.51136 44.6922 9.74242 44.1392 10.2045C43.5938 10.6667 43.1809 11.2955 42.9006 12.0909C42.6278 12.8864 42.4915 13.7917 42.4915 14.8068C42.4915 15.822 42.6278 16.7273 42.9006 17.5227C43.1809 18.3182 43.5938 18.947 44.1392 19.4091C44.6922 19.8636 45.3741 20.0909 46.1847 20.0909Z"
                fill="#FF0A0A"
              />
              <path
                d="M133.631 23.8409C131.866 23.8409 130.339 23.4659 129.051 22.7159C127.771 21.9583 126.782 20.9053 126.085 19.5568C125.388 18.2008 125.04 16.6288 125.04 14.8409C125.04 13.0379 125.388 11.4621 126.085 10.1136C126.782 8.75758 127.771 7.70454 129.051 6.95454C130.339 6.19697 131.866 5.81818 133.631 5.81818C135.396 5.81818 136.919 6.19697 138.199 6.95454C139.487 7.70454 140.479 8.75758 141.176 10.1136C141.873 11.4621 142.222 13.0379 142.222 14.8409C142.222 16.6288 141.873 18.2008 141.176 19.5568C140.479 20.9053 139.487 21.9583 138.199 22.7159C136.919 23.4659 135.396 23.8409 133.631 23.8409ZM133.653 20.0909C134.456 20.0909 135.127 19.8636 135.665 19.4091C136.203 18.947 136.608 18.3182 136.881 17.5227C137.161 16.7273 137.301 15.822 137.301 14.8068C137.301 13.7917 137.161 12.8864 136.881 12.0909C136.608 11.2955 136.203 10.6667 135.665 10.2045C135.127 9.74242 134.456 9.51136 133.653 9.51136C132.843 9.51136 132.161 9.74242 131.608 10.2045C131.063 10.6667 130.65 11.2955 130.369 12.0909C130.097 12.8864 129.96 13.7917 129.96 14.8068C129.96 15.822 130.097 16.7273 130.369 17.5227C130.65 18.3182 131.063 18.947 131.608 19.4091C132.161 19.8636 132.843 20.0909 133.653 20.0909Z"
                fill="#FF0909"
              />
            </svg>
          </p>

          <div className="Lower-Container">
            <button
              onClick={() => {
                goToHome();
              }}
            >
              Home
            </button>
          </div>

          <input
            type="text"
            placeholder="Search food....."
            className="input-box"
          />
        </div>
      </div>

      {/* started with body part */}
      <div className="body-allrecipes">
        <div className="upper-div">
          <img
            src={recipe_image}
            alt="recipe"
            style={{ height: "450px", width: "700px" }}
          />
        </div>
        <div className="lower-div">
          <h1>
            Welcome to Top trips food where the food changes with the seasons
          </h1>
          <p>
            A popular restaurant in your nearby places. We prepares and serves
            quality food and drinks to our customers
          </p>
          <button>Lets start with the Manu</button>
        </div>
      </div>

      {/* Started with the all recipes card cestion*/}
      <div className="recipes-cards-container">
        {
            recipes.map((recipe)=>{
                return (
                    <div className="recipe-card-1" key={recipe.id}>
                    <img
                      src={recipe.image}
                      alt="recipe-imag"
                      style={{ height: "260px", width: "250px" }}
                    />
                    <h3>{recipe.name}</h3>
                    <h4>{recipe.cuisine}</h4>
                    <p className="mealtype">{recipe.mealType}</p>
                    <p>{recipe.ingredients}</p>
                    <p className="ratings">{recipe.rating}</p>
                  </div>
                );
            })
        }
       
      </div>
    </>
  );
};

export default AllRecipes;
