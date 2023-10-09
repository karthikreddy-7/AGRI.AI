import "./feature.css";
function Feature() {
  return (
    <>
      <div className="flex flex-row justify-center py-2 px-4">
        <div class="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-10 text-blue-600">
            <a> Crop Recommendation Model </a>
          </h3>
          <a href="#croprecommender">
            <button>Try Now</button>
          </a>
        </div>
        <div class="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Fertilizer Recommender
          </h3>
          <a href="#fertilizer">
            <button>Try Now</button>
          </a>
        </div>
        <div class="card m-10 flex flex-col h-[calc(100vh-120px)]">
          <h3 className="text-3xl font-serif font-bold mb-16 text-blue-600">
            Plant Disease Detection
          </h3>
          <a href="#plantdisease">
            <button>Try Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Feature;
