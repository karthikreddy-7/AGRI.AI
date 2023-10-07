import "./feature.css";
function Feature() {
  return (
    <>
      <div className="flex flex-row justify-center py-12 px-4 ">
        <div class="card m-10 flex flex-col">
          <h3 className="text-3xl font-serif font-bold mb-10 text-blue-600">
            Crop Recommendation Model
          </h3>
          <button>Try Now</button>
        </div>
        <div class="card m-10 flex flex-col">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Plant Disease Detection
          </h3>
          <button>Try Now</button>
        </div>
        <div class="card m-10 flex flex-col">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Fertilizer Recommender
          </h3>
          <button>Try Now</button>
        </div>
      </div>
    </>
  );
}

export default Feature;
