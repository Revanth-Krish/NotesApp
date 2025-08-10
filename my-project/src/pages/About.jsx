export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-2">
        This app allows you to create, edit, and delete notes.  
        Data is saved in localStorage so it persists after refresh.
      </p>
    </div>
  );
}
