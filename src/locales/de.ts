export default {
  slogan: "Wir bringen Ihre Ideen in Form",

  menu: {
    home: "Startseite",
    about: "Über Uns",
    blog: "Blog",
    contact: "Kontakt",
    services: "Dienstleistungen",
  },

  ourServices: {
    title: "Unsere Kernbereiche",
    paragraph:
      "Ob etablierter Spritzgießbetrieb oder junges Startup Ihre Wünsche in puncto Formenbau werden aus einer Hand bedient. Es muss keine Spritzgießform sein - wir drehen, fräsen, erodieren, schleifen und schweißen Einzelteile bis Kleinserien nach Ihren Anforderungen.",
  },

  services: {
    formtechnik: {
      title: "Formenbau",
      paragraph: "Wir bauen Ihre Formen mit den richtigen Werkzeugen",
      subServices: [
        {
          title: "Beratung & Design",
          description: "Profitieren Sie von unserer umfangreichen Erfahrung",
          paragraph:
            "Jede Form ist einzigartig, beeinflusst von der Geometrie des Teils und dem zu injizierenden Material. Wir sind spezialisiert auf Mehrkomponenten-Werkzeuge und den In-Mold-Prozess.",
          nestedList: [
            {
              title: "Expertise in verschiedenen Branchen:",
              list: [
                "Automobil",
                "Haushaltsgeräte",
                "Hochspannungsisolatoren",
                "Gehäuse für elektronische Geräte",
                "Verpackung",
                "Medizinische Artikel",
              ],
            },
            {
              title: "Materialexpertise:",
              list: ["PE, PP, PC, PVC, Gummi, Silikon"],
            },
            {
              title: "Fortschrittliche Software & Technologie:",
              list: [
                "SolidWorks, Siemens NX CAD/CAM-Integration",
                "Importformate: STEP, DXF und mehr",
                "Individuelle CNC-Fräsprogramme mit Siemens NX CAM",
              ],
            },
          ],
          cta: "Kontaktieren Sie uns, um zu besprechen, wie wir Ihr Formenkonzept mit Präzision und Effizienz zum Leben erwecken können.",
        },
        {
          title: "Werkzeugherstellung",
          description: "Ihr Design ist erst der Anfang",
          paragraph:
            "Nach der Genehmigung gehen wir nahtlos zur Fertigungsphase über. Wir nutzen modernste Ausrüstung, um Ihre Form präzise zu fräsen, zu drehen und zu schleifen. Unsere Maschinen liefern außergewöhnliche Toleranzen bis zu wenigen Mikrometern, während unsere speziellen Poliertechniken für spiegelglatte Oberflächen sorgen.",
          nestedList: [
            {
              title: "Prozesse beinhalten:",
              list: [
                "3D-Fräsen",
                "Hochpräzisionsdrehbearbeitung",
                "Ultrafeine Schleifbearbeitung",
                "Spezialisiertes Polieren",
              ],
            },
            {
              title: "Alles unter einem Dach:",
              list: [
                "Werkzeugherstellung, Endbearbeitung und Verbesserungen werden alle intern durchgeführt, was Synchronisation und Kosteneffizienz garantiert.",
              ],
            },
          ],
          cta: "Bereit loszulegen? Kontaktieren Sie uns noch heute für weitere Informationen zu unseren Werkzeugfertigungsdiensten!",
        },
        {
          title: "Abmusterung & Kleinserienfertigung",
          description: "Wir hören bei der Werkzeugproduktion nicht auf",
          paragraph:
            "Sobald Ihr Werkzeug fertig ist, führen wir einen umfassenden Bemusterungsprozess durch, um seine Funktionalität sicherzustellen, gefolgt von Kleinserienproduktionsläufen. Unsere modernen Spritzgießmaschinen sind mit fortschrittlichen Robotersystemen für effiziente Teileentnahme und Übermoldingfähigkeiten ausgestattet.",
          nestedList: [
            {
              title: "Maschinenspezifikationen:",
              list: [
                "Arburg 520 C: 2000 kN Schließkraft, Wittmann-Roboter für automatisierte Teileentnahme",
                "Boy 22 M: 220 kN Schließkraft, präzise Kleinteileproduktion",
              ],
            },
            {
              title: "Übermolden und Insert-Molding:",
              list: [
                "Ideal für die Integration von Etiketten oder anderen Einsätzen in die Form.",
              ],
            },
          ],
          cta: "Benötigen Sie hochwertige Bemusterung und Kleinserienproduktion? Kontaktieren Sie unser Team, um zu erfahren, wie wir Ihr Projekt unterstützen können.",
        },
      ],
    },

    fertigung: {
      title: "Fertigung",
      paragraph: "Unsere hauseigene Produktion",
      subServices: [
        {
          title: "Fräsen",
          description: "Präzision trifft auf Effizienz",
          paragraph:
            "Unsere Hochgeschwindigkeits-CNC-Fräsmaschinen produzieren selbst komplexeste Geometrien mit unübertroffener Präzision. Ob Sie mit Stahl, Aluminium oder anderen Materialien arbeiten, unsere Ausrüstung gewährleistet enge Toleranzen und makellose Oberflächen.",
          nestedList: [
            {
              title: "Schlüsselausrüstung:",
              list: [
                "Deckel Maho CNC-Maschinen: Siemens-gesteuert für detailliertes und genaues Fräsen",
                "Mikron HSM 500: Hochgeschwindigkeitsfräsen für feine Details, bis zu 30.000 U/min",
              ],
            },
            {
              title: "Fähigkeiten:",
              list: [
                "Max. Teilegröße: 840 x 500 x 500 mm",
                "24 bis 36 Werkzeugpositionen für komplexe Aufgaben",
              ],
            },
          ],
          cta: "Kontaktieren Sie uns für weitere Details darüber, wie unsere Fräsdienstleistungen Ihren Bedürfnissen gerecht werden können.",
        },
        {
          title: "Drehen",
          description: "CNC, NC und konventionell",
          paragraph:
            "Wir bieten CNC-, NC- und konventionelles Drehen an, um eine breite Palette von Aufgaben zu bewältigen, von kleinen Präzisionsteilen bis hin zu großen Komponenten. Mit Ausrüstung wie der Gildemeister NEF 400 stellen wir sicher, dass jeder Drehauftrag mit höchster Genauigkeit ausgeführt wird.",
          nestedList: [
            {
              title: "Ausrüstung:",
              list: [
                "Gildemeister NEF 400: Ø350 x 650 mm Bearbeitungsbereich, 12 Werkzeugpositionen",
                "Colchester Triumph: Ø400 x 1000 mm Bearbeitungsbereich",
              ],
            },
            {
              title: "Fähigkeiten:",
              list: [
                "Max. Spindeldrehzahlen: 6.000 U/min",
                "Präzisionsdrehbearbeitung bis zu wenigen Mikrometern",
              ],
            },
          ],
          cta: "Benötigen Sie Experten-Drehdienste? Melden Sie sich noch heute für eine Beratung!",
        },
        {
          title: "Senkerodieren",
          description: "Wenn traditionelle Bearbeitung an ihre Grenzen stößt",
          paragraph:
            "Wir verwenden elektroerosive Bearbeitung (EDM), um komplexe Geometrien in harten Metallen zu erstellen. Unsere fortschrittlichen CNC-gesteuerten EDM-Maschinen gewährleisten Präzision bis ins kleinste Detail.",
          nestedList: [
            {
              title: "Technische Fähigkeiten:",
              list: [
                "Werkstückgröße bis zu 840 x 600 mm",
                "Individuelle Elektrodenherstellung für hohe Detailgenauigkeit",
                "Gewichtskapazität bis zu 600 kg",
              ],
            },
          ],
          cta: "Interessiert an weiteren Informationen? Kontaktieren Sie uns, um mehr darüber zu erfahren, wie EDM für Ihr Projekt funktionieren kann.",
        },
        {
          title: "Drahterodieren",
          description: "Wenn traditionelle Bearbeitung an ihre Grenzen stößt",
          paragraph:
            "Unsere Drahterodiermaschinen schneiden selbst durch die härtesten Metalle mit extremer Präzision und verwenden einen dünnen Draht, um komplizierte Formen und Designs zu erstellen.",
          nestedList: [
            {
              title: "Hauptmerkmale:",
              list: [
                "Präzisionsschneiden für komplexe Geometrien",
                "Fähig, große Werkstücke zu bearbeiten",
              ],
            },
          ],
          cta: "Bereit, Ihr Projekt auf die nächste Stufe zu heben? Wenden Sie sich noch heute an unsere Drahterodier-Experten!",
        },
        {
          title: "Laserschweißen",
          description: "Schweißen mit Lasertechnologie",
          paragraph:
            "Mit der neuesten Lasertechnologie führen wir präzise Schweißarbeiten zur Wiederherstellung und Reparatur von Formen durch. Ob es sich um fehlendes Material oder strukturelle Schäden handelt, unser Laserschweißen gewährleistet starke, genaue Reparaturen.",
          nestedList: [
            {
              title: "Laserpräzision:",
              list: [
                "Schweißnähte so fein wie 0,1 mm",
                "Schweißen von Aluminium, Stahl, Edelstahl und Titan",
              ],
            },
          ],
          cta: "Kontaktieren Sie uns, um zu besprechen, wie Laserschweißen die Lebensdauer Ihrer Formen verlängern kann.",
        },
        {
          title: "Lasergravieren",
          description: "Präzises Ätzen für bleibende Eindrücke",
          paragraph:
            "Logos, Seriennummern und individuelle Texte werden mit unserem Trumpf-Gravierlaser präzise in Ihre Formen oder Produkte eingraviert. Mit der Fähigkeit, Teile bis zu 800 kg zu bearbeiten, ermöglicht unser flexibler Laserarm tiefe Gravuren auch in den schwierigsten Bereichen.",
          nestedList: [
            {
              title: "Anwendungen:",
              list: [
                "Seriennummern, Barcodes und QR-Codes",
                "Logos und Markenzeichen",
              ],
            },
          ],
          cta: "Nehmen Sie Kontakt auf, um unsere Graviermöglichkeiten für Ihr Projekt zu erkunden.",
        },
        {
          title: "Hochglanzpolieren",
          description: "Verwandlung von Oberflächen in makellose Spiegel",
          paragraph:
            "Perfekte Oberflächen beginnen mit unseren Hochglanzpolierdiensten. Wir sind spezialisiert auf die Erstellung spiegelglatter Oberflächen für Spritzguss- und Druckgussformen und stellen sicher, dass Ihre Teile scharfe Kanten und makellose Oberflächen haben.",
          nestedList: [
            {
              title: "Expertenpolieren für:",
              list: [
                "Gehäuseteile",
                "Haushaltsartikel",
                "Kosmetikverpackungen",
                "Spielzeug und Geschenkartikel",
              ],
            },
            {
              title: "Zusätzliche Dienstleistungen:",
              list: [
                'Kritische Konturbereiche erhalten spezielle "Entformungspolierung"',
                "Feinläppen zur Oberflächenrauheitsreduzierung",
              ],
            },
          ],
          cta: "Kontaktieren Sie uns noch heute, um zu besprechen, wie unser Hochglanzpolieren das Aussehen Ihres Produkts verbessern kann.",
        },
        {
          title: "Flachschleifen",
          description: "Mit modernster Präzision",
          paragraph:
            "Flachschleifen ist wesentlich für die Erzielung flacher, glatter Oberflächen auf Ihren Formen und Werkzeugen. Unsere hochmodernen Maschinen können große Werkstücke mit einer Präzision bis zu Mikrometern bearbeiten.",
          nestedList: [
            {
              title: "Fähigkeiten:",
              list: [
                "Große Arbeitsbereiche bis zu 1000mm",
                "Präzisionsschleifen zur Reduzierung der Oberflächenrauheit",
              ],
            },
            {
              title: "Zusätzliche Dienstleistungen:",
              list: [
                'Kritische Konturbereiche erhalten spezielle "Entformungspolierung"',
                "Feinläppen zur Oberflächenrauheitsreduzierung",
              ],
            },
          ],
          cta: "Benötigen Sie Präzisionsschleifen? Melden Sie sich, um mehr über unsere Dienstleistungen zu erfahren.",
        },
      ],
    },

    reparatur: {
      title: "Reparatur",
      paragraph: "Unsere Reparatur- und Wartungsdienste",
      subServices: [
        {
          title: "Renovierung",
          description: "Verlängern Sie die Lebensdauer Ihrer Formen",
          paragraph:
            "Wir sind darauf spezialisiert, abgenutzte Formen und Werkzeuge in ihren ursprünglichen Zustand zurückzuversetzen und sicherzustellen, dass sie weiterhin optimale Leistung liefern können.",
          nestedList: [
            {
              title: "Fähigkeiten:",
              list: [
                "Vollständige Formenrenovierung",
                "Materialwiederherstellung durch Schweißen und Bearbeitung",
              ],
            },
          ],
          cta: "Interessiert an der Renovierung Ihrer Werkzeuge? Kontaktieren Sie unser Team für Expertenrenovierungsdienste.",
        },
        {
          title: "Überholung",
          description: "Eine komplette Überholung Ihrer Formen",
          paragraph:
            "Eine vollständige Überholung beinhaltet das Zerlegen, Inspizieren und Reparieren Ihrer Formen, um sie wieder in Höchstform zu bringen. Wir konzentrieren uns darauf, Verschleiß, Abnutzung und alle zugrunde liegenden Probleme zu beheben, die die zukünftige Produktion beeinträchtigen könnten.",
          nestedList: [
            {
              title: "Unser Prozess",
              list: [
                "Vollständige Formenzerlegung",
                "Detaillierte Inspektion auf Schäden oder Verschleiß",
                "Reparaturen und Upgrades nach Bedarf",
              ],
            },
          ],
          cta: "Möchten Sie Ihre Formen überholen lassen? Melden Sie sich für weitere Details.",
        },
        {
          title: "Formenreparatur",
          description: "Stellen Sie Ihre Formen wieder her",
          paragraph:
            "Unsere Formenreparaturdienste behandeln alles von Oberflächenschäden bis hin zu mechanischen Problemen. Ob Sie kleinere Reparaturen oder einen kompletten Wiederaufbau benötigen, unser Team verfügt über das Fachwissen, um Ihre Formen in einen neuwertigen Zustand zu versetzen.",
          nestedList: [
            {
              title: "Dienstleistungen umfassen:",
              list: [
                "Oberflächenpolieren zur Kratzerreparatur",
                "Laserschweißen für strukturelle Integrität",
                "Detaillierte Inspektion und Prüfung",
              ],
            },
          ],
          cta: "Kontaktieren Sie uns für schnelle und zuverlässige Formenreparaturdienste.",
        },
      ],
    },
  },

  contact: {
    title: "Contact Us",
    paragraph:
      "Wir würden uns freuen, von Ihnen zu hören! Ob Sie eine Frage haben, ein Angebot benötigen oder ein neues Projekt besprechen möchten, zögern Sie nicht, uns zu kontaktieren.",
    phone: "Telefon",
    hours: "Öffnungszeiten",
    opendays: "Montag - Freitag: 7:00 - 16:00 Uhr",
    form: {
      title: "Kontakt Form",
      paragraph: "Wir werden Sie so schnell wie möglich beantworten",
      textarea: "Geben Sie Ihre Nachricht hier ein",
      submit: "Senden",
    },
  },

  about: {
    title: "Über Uns",
    paragraph: "Formen Werkstatt, wo Innovation auf Präzision trifft.",
    description:
      "Im Herzen von Reichelsheim, Odenwald, sind wir darauf spezialisiert, Ihre Ideen in greifbare Ergebnisse zu verwandeln. Unser voll ausgestattetes Werk ermöglicht es uns, ein umfassendes Dienstleistungsangebot von der Formenherstellung bis hin zur hochpräzisen Maschinenbearbeitung anzubieten. ",
  },
} as const;
