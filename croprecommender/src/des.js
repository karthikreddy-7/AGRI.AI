import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="px-16  lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center"
              src={bg}
              style={{ height: "550px", width: "470px" }}
            />
          </div>

          <div class="flex flex-col flex-wrap lg:w-1/2 lg:pl-6 lg:text-left text-center">
            <div class="flex flex-col lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-blue-600 font-bold text-3xl title-font mb-2">
                  Why AGRI.AI ?
                </h2>
                <p class="leading-relaxed text-lg mb-3">
                  AGRI.AI is an integrated platform that combines three powerful
                  machine learning models to assist farmers.
                </p>
                <h4 className="text-black-900 font-bold text-lg">
                  1. Crop Recommendation Model
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Takes user-input details such as nitrogen, potassium,
                  phosphorous levels, temperature, humidity, and pH of the soil
                  and predicts the most suitable crop varieties that can be
                  grown in a given area.
                </p>
                <a class="m-2 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  2. Plant Disease Detection
                </h4>
                <p className="text-black-900 text-lg m-2">
                  Detects the Disease of the plant by using the image uploaded
                  by the user.(limited to certain plants)
                </p>
                <a class="mt-2 mb-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  3. Fertilizer Recommender
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Recommends the Fertilizer Required for the plant based on
                  disease detected and the type of soil.(Yet to release.)
                </p>
                <a class="m-2 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Des;
