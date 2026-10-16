import './cover.css'

interface Props {
  onStart: () => void
  onAbout: () => void
}

/** Title page, nothing else: wordmark, name, one line of purpose, one action. */
export default function Cover({ onStart, onAbout }: Props) {
  return (
    <main className="cover screen">
      <div className="cover__lattice" aria-hidden />

      <section className="cover__body" aria-labelledby="cover-title">
        <h1 id="cover-title" className="cover__title">
          <span className="cover__ar" lang="ar" dir="rtl">لُغَتِي</span>
          <span className="cover__latin">Lughati Vokasi</span>
        </h1>
        <p className="cover__what">Kamus Digital Arab–Indonesia untuk Siswa SMK</p>
        <button type="button" className="btn btn--primary btn--lg cover__cta" onClick={onStart}>Buka kamus</button>
        <button type="button" className="link" onClick={onAbout}>Kenapa kamus ini dibuat?</button>
      </section>

      <footer className="cover__foot">
        <p>SMK Muhammadiyah Pencongan</p>
        <p>Disusun oleh Sultan Bagus Permadi</p>
      </footer>
    </main>
  )
}
