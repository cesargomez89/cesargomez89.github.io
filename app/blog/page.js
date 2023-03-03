export default function Blog() {
  return (
    <main className="bg-base-200">
      <div className="flex justify-center">
        <h1 className='text-5xl'>Blog</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 rounded-lg">
        <div className="card bg-base shadow-xl image-full">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Why Fullstack Rails Developers should move to Hotwire</h2>
            <p>React has been a popular JavaScript library for building user interfaces for many years. But maybe is good time to go back to the basics.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card bg-base shadow-xl image-full">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Why Fullstack Rails Developers should move to Hotwire</h2>
            <p>React has been a popular JavaScript library for building user interfaces for many years. But maybe is good time to go back to the basics.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card bg-base shadow-xl image-full">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Why Fullstack Rails Developers should move to Hotwire</h2>
            <p>React has been a popular JavaScript library for building user interfaces for many years. But maybe is good time to go back to the basics.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card bg-base shadow-xl image-full">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Why Fullstack Rails Developers should move to Hotwire</h2>
            <p>React has been a popular JavaScript library for building user interfaces for many years. But maybe is good time to go back to the basics.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card bg-base shadow-xl image-full">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Why Fullstack Rails Developers should move to Hotwire</h2>
            <p>React has been a popular JavaScript library for building user interfaces for many years. But maybe is good time to go back to the basics.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="btn-group grid grid-cols-2 pb-4">
          <button className="btn btn-outline">Previous page</button>
          <button className="btn btn-outline">Next</button>
        </div>
      </div>
    </main>
  )
}
