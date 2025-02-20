export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">您的Logo</div>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-blue-600">首頁</a></li>
              <li><a href="/about" className="hover:text-blue-600">關於</a></li>
              <li><a href="/blog" className="hover:text-blue-600">部落格</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  