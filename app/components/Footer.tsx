export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} 您的網站名稱. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  