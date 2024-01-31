const paintings = [
    {
      title: "Springtime in Paris",
      artist: "Claude Monet",
      year: 1886,
      description: "A beautiful depiction of cherry blossoms in full bloom along the Seine River in Paris.",
      image: "",
    },
    {
      title: "Primavera",
      artist: "Sandro Botticelli",
      year: 1482,
      description: "An allegorical painting representing the arrival of spring with a group of mythological figures.",
      image: "https://example.com/primavera.jpg",
    }
    
  ];
  
  console.log(paintings);
  localStorage.setItem("paintings", JSON.stringify(paintings));