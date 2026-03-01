function medikamente() {
    const medWindow = window.open("", "Medikamente", "width=700,height=900,scrollbars=yes");
    medWindow.document.write(`
        <html>
        <head>
            <title>Medikamente Wirkung</title>
            <style>
                body { font-family: Arial; padding: 20px; line-height: 1.6; }
                h1 { color: red; }
                h2 { color: darkblue; margin-top: 30px; }
                ul { margin-bottom: 20px; }
                li { margin: 5px 0; }
            </style>
        </head>
        <body>
            <h1>Medikamente Wirkung</h1>

            <h2>🩺 Schmerzmittel (gegen Schmerzen)</h2>
            <ul>
                <li>Acetylsalicylsäure (ASS) → gegen Schmerzen, Fieber und Entzündung, macht Blut etwas dünner</li>
                <li>Butylscopolamin → gegen Bauchkrämpfe</li>
                <li>Esketamin → starkes Schmerzmittel, auch zur Narkose</li>
                <li>Fentanyl → sehr starkes Schmerzmittel</li>
                <li>Ibuprofen → gegen Schmerzen, Fieber und Entzündung</li>
                <li>Metamizol → stark gegen Schmerzen und Fieber, hilft auch bei Krämpfen</li>
                <li>Morphin → sehr starkes Schmerzmittel</li>
                <li>Nalbuphin → starkes Schmerzmittel</li>
                <li>Paracetamol → gegen Schmerzen und Fieber</li>
                <li>Piritramid → starkes Schmerzmittel</li>
                <li>Sufentanil → extrem starkes Schmerzmittel (z.B. bei Operationen)</li>
            </ul>

            <h2>🚑 Gegenmittel (heben Wirkung anderer Medikamente auf)</h2>
            <ul>
                <li>Atropin → macht Herz schneller, hilft bei bestimmten Vergiftungen</li>
                <li>Flumazenil → hebt Beruhigungsmittel auf</li>
                <li>Naloxon → hebt starke Schmerzmittel (z.B. Morphin) auf</li>
            </ul>

            <h2>🤢 Gegen Übelkeit</h2>
            <ul>
                <li>Dimenhydrinat → gegen Übelkeit und Erbrechen, macht müde</li>
                <li>Droperidol → gegen starke Übelkeit</li>
                <li>Granisetron → stark gegen Übelkeit (z.B. nach Chemo oder OP)</li>
                <li>Metoclopramid → gegen Übelkeit, bringt den Magen in Bewegung</li>
                <li>Ondansetron → stark gegen Übelkeit</li>
            </ul>

            <h2>🌿 Gegen Allergie</h2>
            <ul>
                <li>Clemastin → gegen Allergie, macht müde</li>
                <li>Dimetinden → gegen Allergie</li>
                <li>Ranitidin → gegen Magensäure (früher oft benutzt)</li>
            </ul>

            <h2>😴 Beruhigungsmittel</h2>
            <ul>
                <li>Diazepam → beruhigt, gegen Angst und Krampfanfälle</li>
                <li>Lorazepam → beruhigt stark, gegen Angst und Krämpfe</li>
                <li>Midazolam → beruhigt schnell, macht schläfrig (z.B. vor OP)</li>
            </ul>

            <h2>🫁 Für die Atemwege</h2>
            <ul>
                <li>Epinephrin (Adrenalin) → bei Allergieschock, macht Atemwege weit</li>
                <li>Fenoterol → macht Atemwege weit (bei Asthma)</li>
                <li>Ipratropiumbromid → macht Atemwege weit</li>
                <li>Reproterol → macht Atemwege weit</li>
                <li>Salbutamol → macht Atemwege weit (Asthmaspray)</li>
                <li>Terbutalin → macht Atemwege weit</li>
            </ul>

            <h2>🩸 Blut & Gerinnung</h2>
            <ul>
                <li>ASS → macht Blut dünner</li>
                <li>Heparin → verhindert Blutgerinnsel</li>
                <li>Tranexamsäure → stoppt starke Blutungen</li>
            </ul>

            <h2>❤️ Herzmedikamente</h2>
            <ul>
                <li>Adenosin → beendet bestimmte Herzrhythmusstörungen</li>
                <li>Ajmalin → gegen Herzrhythmusstörungen</li>
                <li>Amiodaron → gegen schwere Herzrhythmusstörungen</li>
                <li>Atropin → macht Herz schneller</li>
                <li>Adrenalin → stärkt Herz und Kreislauf (z.B. bei Reanimation)</li>
                <li>Nitroglycerin → bei Brustschmerz, erweitert Gefäße</li>
                <li>Lidocain → gegen bestimmte Herzrhythmusstörungen</li>
                <li>Magnesium → stabilisiert Herzrhythmus</li>
                <li>Metoprolol → macht Herz langsamer</li>
                <li>Noradrenalin → hebt Blutdruck</li>
                <li>Theodrenalin-Cafedrin → hebt Blutdruck</li>
            </ul>

            <h2>🔄 Kreislauf / Blutdruck</h2>
            <ul>
                <li>Furosemid → entwässert (bei Wasser in Lunge/Beinen)</li>
                <li>Nifedipin → senkt Blutdruck</li>
                <li>Urapidil → senkt Blutdruck schnell</li>
            </ul>

            <h2>💉 Narkose</h2>
            <ul>
                <li>Esketamin → Narkose und starke Schmerzen</li>
                <li>Fentanyl → starke Schmerzen bei OP</li>
                <li>Propofol → zur Narkose (macht bewusstlos)</li>
                <li>Rocuronium → macht Muskeln ganz schlaff (für Beatmung)</li>
                <li>Sufentanil → sehr starkes Schmerzmittel bei OP</li>
                <li>Suxamethonium → macht Muskeln kurzzeitig schlaff (für Beatmung)</li>
            </ul>

            <h2>🚨 Reanimation</h2>
            <ul>
                <li>Amiodaron → bei schweren Herzrhythmusstörungen</li>
                <li>Adrenalin → bringt Herz und Kreislauf in Gang</li>
                <li>Lidocain → bei bestimmten Herzrhythmusstörungen</li>
            </ul>

            <h2>📦 Sonstige</h2>
            <ul>
                <li>Dexamethason → gegen Entzündung, Allergie, Schwellung</li>
                <li>Glukose → bei Unterzucker</li>
                <li>Haloperidol → beruhigt stark bei Unruhe</li>
                <li>Oxytocin → löst Wehen aus</li>
                <li>Prednisolon → gegen Entzündung und Allergie</li>
                <li>Vitamin B1 (Thiamin) → wichtig bei Alkoholkranken</li>
            </ul>
        </body>
        </html>
    `);
}