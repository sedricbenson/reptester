interface GalleryImage {
  src: string;
  alt: string;
}

export default function GallerySection() {
  const images: GalleryImage[] = [
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Open workspace area"
    },
    {
      src: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Modern meeting room"
    },
    {
      src: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Comfortable lounge area"
    },
    {
      src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Private office"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Kitchen and refreshment area"
    },
    {
      src: "https://pixabay.com/get/ge11cef2b94859c23280651cd29d485bf1d339f180c2182d99cfa102b269000c9e8744948071b9144cffb4e4f0010e35d62636528ebf43935054a2ffbf62cfe2c_1280.jpg",
      alt: "Phone booth for private calls"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workspace Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of our modern workspace environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
