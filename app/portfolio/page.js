export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-base-200 min-h-screen text-base-content grid content-center">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center gap-4 p-4 rounded-lg">
        <div className="card card-compact bg-primary text-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Neovim Dotfiles</h2>
            <p>Basic Neovim dotfiles made for web development.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-primary text-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Inspiration Dotfiles</h2>
            <p>Complete dotfiles made for zsh shell using Tmux and Prezto</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-primary text-primary-content w-96 bg-base-100 shadow-xl">
          <figure><img src="hotwire.jpg" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">Offers Bot</h2>
            <p>I built a Telegram bot to receive offers from Amazon Mexico using AWS Lambda and DynamoDB</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
