import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="px-16  lg:w-1/2 w-full mb-10 lg:mb-0 rounded-2xl overflow-hidden h-[calc(100vh-80px)]">
            <img alt="feature" className="rounded-xl" src={bg} />
          </div>

          <div class="flex flex-col flex-wrap lg:w-1/2 lg:pl-2 lg:text-left text-center">
            <div class="flex flex-col lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-blue-600 font-bold text-2xl title-font mb-2 mr-3">
                  WHY AGRI.AI ?
                </h2>
                <p class="leading-relaxed text-lg mb-2">
                  AGRI.AI is an integrated platform that combines three powerful
                  machine learning models to assist farmers, hobbyists, and
                  agriculture enthusiasts.
                </p>
                <h4 className="text-black-900 font-bold text-lg">
                  1. Crop Recommendation Model
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Takes user-input details such as nitrogen, potassium,
                  phosphorous levels, temperature, humidity, and pH of the soil.
                  Using this information, it predicts the most suitable crop
                  varieties that can be grown, ensuring optimal yield and
                  resource utilization.
                </p>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  2. Plant Disease Detection
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Keeping your plants healthy is crucial for a successful
                  harvest. Our second ML model is designed to identify and
                  diagnose plant diseases. Users can upload images of their
                  plants, and the model will provide instant feedback, helping
                  farmers take timely action to protect their crops.
                </p>
              </div>
              <div class="flex-grow">
                <h4 className="text-black-900 font-bold text-lg">
                  3. Fertilizer Recommender
                </h4>
                <p className="text-black-900 text-lg mb-2">
                  Recommends the Fertilizer Required for the plant based on
                  disease detected and the type of soil.(Yet to release.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Des;
