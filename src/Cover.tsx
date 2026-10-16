import { entryNo, type Word } from './lib/core'
import { Khatam } from './ui'
import './cover.css'

interface Props {
  /** One real entry per major, so the cover shows what the dictionary contains instead of decoration. */
  samples: Word[]
  onStart: () => void
  onAbout: () => void
}

export default function Cover({ samples, onStart, onAbout }: Props) {
  return (
    <main className="cover screen">
      <div className="cover__lattice" aria-hidden />

      <header className="cover__head">
        <span>SMK Muhammadiyah Pencongan</span>
        <span className="ar" lang="ar" dir="rtl">قاموس عربي إندونيسي</span>
      </header>

      <section className="cover__body" aria-labelledby="cover-title">
        <div className="cover__title">
          <h1 id="cover-title">
            <span className="cover__ar" lang="ar" dir="rtl">لُغَتِي</span>
            <span className="cover__latin">Lughati Vokasi</span>
          </h1>
          <p className="cover__what">Kamus Digital Arab–Indonesia untuk Siswa SMK</p>
        </div>

        <div className="cover__rule" aria-hidden><Khatam /></div>

        <ol className="cover__index" aria-label="Contoh entri dari tiap jurusan">
          {samples.map(w => (
            <li key={w.id}>
              <span className="no">{entryNo(w)}</span>
              <span className="mean">{w.mean}</span>
              <span className="ar" lang="ar" dir="rtl">{w.ar}</span>
            </li>
          ))}
        </ol>
      </section>

      <footer className="cover__foot">
        <p className="cover__colophon"><span>Disusun oleh</span><strong>Sultan Bagus Permadi</strong></p>
        <div className="cover__actions">
          <button type="button" className="btn btn--primary btn--lg" onClick={onStart}>Buka kamus</button>
          <button type="button" className="link" onClick={onAbout}>Kenapa kamus ini dibuat?</button>
        </div>
      </footer>
    </main>
  )
}
