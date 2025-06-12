export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-6 text-center mt-12 shadow-inner">
      <p className="text-sm font-semibold">
        © {new Date().getFullYear()} DevConnect. All rights reserved.
      </p>
    </footer>
  );
}
