import { useState, useEffect, useCallback } from "react";
import { useApp } from "../context/AppContext";

const projectImages: string[][] = [
  [],
  [],
  [],
  [],
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => import.meta.env.BASE_URL + `grootpay/gp${i === 1 ? '' : i}.png`),
];

function ImageModal({
  images,
  startIndex,
  onClose,
  labels,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
  labels: { close: string; prev: string; next: string };
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={labels.close}>
          ✕
        </button>
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="modal-img"
        />
        <div className="modal-controls">
          <button className="modal-btn" onClick={prev} aria-label={labels.prev}>
            ‹
          </button>
          <span className="modal-counter">
            {index + 1} / {images.length}
          </span>
          <button className="modal-btn" onClick={next} aria-label={labels.next}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useApp();
  const [modal, setModal] = useState<{ images: string[]; index: number } | null>(null);

  const openModal = (images: string[], index: number) => setModal({ images, index });
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">{t.projects.label}</span>
          <h2 className="section-title">{t.projects.title}</h2>
        </div>

        <div className="projects-grid">
          {t.projects.items.map((p, idx) => {
            const images = projectImages[idx];
            return (
              <div key={idx} className="project-card">
                <div className="project-title">{p.title}</div>

                <p className="project-desc-text">{p.description}</p>

                {images.length > 0 && (
                  <div className="project-images">
                    {images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`${p.title} - image ${i + 1}`}
                        className="project-thumb"
                        onClick={() => openModal(images, i)}
                      />
                    ))}
                  </div>
                )}

                <div className="project-tags">
                  {p.tech.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <ImageModal
          images={modal.images}
          startIndex={modal.index}
          onClose={closeModal}
          labels={t.projects.modal}
        />
      )}
    </section>
  );
}
