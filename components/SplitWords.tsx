/* Separa un texto en palabras para animarlas una por una.
   El texto completo queda en un span solo para lectores de pantalla. */
export default function SplitWords({ text, lines }: { text?: string; lines?: string[] }) {
  const filas = lines ?? [text ?? ""];
  return (
    <>
      <span className="sr-only">{filas.join(" ")}</span>
      <span aria-hidden="true">
        {filas.map((fila, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {fila.split(" ").map((palabra, j) => (
              <span key={j}>
                {j > 0 && " "}
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span data-word className="inline-block">
                    {palabra}
                  </span>
                </span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </>
  );
}
