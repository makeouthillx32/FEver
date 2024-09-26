export default {
  slogan: "We bring your ideas to life",

  menu: {
    home: "Home",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
    services: "Services",
  },

  ourServices: {
    title: "Our Core Areas",
    paragraph:
      "Whether an established injection molding company or a young startup, your mold-making needs are handled from a single source. It doesn't have to be an injection mold – we turn, mill, erode, grind, and weld individual parts to small series according to your requirements.",
  },

  services: {
    formtechnik: {
      title: "Mold Technology",
      paragraph: "We build your molds with the right tools",
      subServices: [
        {
          title: "Consulting & Design",
          description: "Benefit from our extensive experience",
          paragraph:
            "Every mold is unique, influenced by the geometry of the part and the material to be injected. We specialize in multi-component tools and the in-mold process.",
          nestedList: [
            {
              title: "Expertise Across Multiple Industries:",
              list: [
                "Automotive",
                "Household Appliances",
                "High-Voltage Insulators",
                "Electronic Device Housings",
                "Packaging",
                "Medical Articles",
              ],
            },
            {
              title: "Materials Expertise:",
              list: ["PE, PP, PC, PVC, Rubber, Silicone"],
            },
            {
              title: "Advanced Software & Technology:",
              list: [
                "SolidWorks, Siemens NX CAD/CAM integration",
                "Import formats: STEP, DXF, and more",
                "Custom CNC milling programs with Siemens NX CAM",
              ],
            },
          ],
          cta: "Contact us to discuss how we can bring your mold concept to life with precision and efficiency.",
        },
        {
          title: "Tool Manufacturing",
          description: "Your design is only the beginning",
          paragraph:
            "Once approved, we move seamlessly to the manufacturing phase. We leverage state-of-the-art equipment to mill, turn, and grind your mold to perfection. Our machines deliver exceptional tolerance down to a few microns, while our custom polishing techniques ensure mirror finishes.",
          nestedList: [
            {
              title: "Processes Include:",
              list: [
                "3D Milling",
                "High-precision turning",
                "Ultra-fine grinding",
                "Specialized polishing",
              ],
            },
            {
              title: "Everything Under One Roof:",
              list: [
                "Tool manufacturing, finishing, and enhancements are all performed in-house, guaranteeing synchronization and cost-effectiveness.",
              ],
            },
          ],
          cta: "Ready to get started? Contact us today for more information on our tool manufacturing services!",
        },
        {
          title: "Sampling & Small Batch Production",
          description: "We don't stop at tool production",
          paragraph:
            "Once your tool is ready, we conduct a comprehensive sampling process to ensure its functionality, followed by small batch production runs. Our modern injection molding machines are equipped with advanced robotic systems for efficient part extraction and overmolding capabilities.",
          nestedList: [
            {
              title: "Machine Speciifications:",
              list: [
                "Arburg 520 C: 2000 kN closing force, Wittmann robot for automated part removal",
                "Boy 22 M: 220 kN closing force, precise small-part production",
              ],
            },
            {
              title: "Overmolding and Insert Molding:",
              list: [
                "Ideal for integrating labels or other inserts into the mold.",
              ],
            },
          ],
          cta: "Need high-quality sampling and small production runs? Contact our team to learn how we can support your project.",
        },
      ],
    },

    fertigung: {
      title: "Production",
      paragraph: "Our in-house production",
      subServices: [
        {
          title: "Milling",
          description: "Precision meets efficiency",
          paragraph:
            "Our high-speed CNC milling machines produce even the most complex geometries with unmatched precision. Whether you're working with steel, aluminum, or other materials, our equipment ensures tight tolerances and flawless surfaces.",
          nestedList: [
            {
              title: "Key Equipment:",
              list: [
                "Deckel Maho CNC Machines: Siemens-controlled for detailed and accurate milling",
                "Mikron HSM 500: High-speed milling for intricate details, up to 30,000 RPM",
              ],
            },
            {
              title: "Capabilities:",
              list: [
                "Max part size: 840 x 500 x 500 mm",
                "24 to 36 tool positions for complex jobs",
              ],
            },
          ],
          cta: "Contact us for more details about how our milling services can meet your needs.",
        },
        {
          title: "Turning",
          description: "CNC, NC, and Conventional",
          paragraph:
            "We offer CNC, NC, and conventional turning to handle a broad range of tasks, from small precision parts to large components. With equipment like the Gildemeister NEF 400, we ensure that every turning job is completed with utmost accuracy.",
          nestedList: [
            {
              title: "Equipment:",
              list: [
                "Gildemeister NEF 400: Ø350 x 650 mm machining range, 12-tool positions",
                "Colchester Triumph:** Ø400 x 1000 mm machining range",
              ],
            },
            {
              title: "Capabilities:",
              list: [
                "Max spindle speeds: 6,000 RPM",
                "Precision turning down to a few microns",
              ],
            },
          ],
          cta: "Need expert turning services? Reach out today for a consultation!",
        },
        {
          title: "Sinker EDM",
          description: "When traditional machining reaches its limits",
          paragraph:
            "We use electrical discharge machining (EDM) to create complex geometries in hard metals. Our advanced CNC-controlled EDM machines ensure precision down to the finest detail.",
          nestedList: [
            {
              title: "Technical Capabilities:",
              list: [
                "Workpiece size up to 840 x 600 mm",
                "Custom electrode manufacturing for high detail",
                "Weight capacity up to 600 kg"
              ],
            },
          ],
          cta: "Interested in learning more? Contact us for more information on how EDM can work for your project.",
        },
        {
          title: "Wire EDM",
          description: "When traditional machining reaches its limits",
          paragraph:
            "Our wire EDM machines cut through even the hardest metals with extreme precision, using a thin wire to create intricate shapes and designs.",
          nestedList: [
            {
              title: "Key Features:",
              list: [
                "Precision cutting for complex geometries",
                "Capable of handling large workpieces",
              ],
            },
          ],
          cta: "Ready to take your project to the next level? Reach out to our wire EDM experts today!",
        },
        {
          title: "Laser Welding",
          description: "Welding with laser technology",
          paragraph:
            "Using the latest in laser technology, we perform precise welding to restore and repair molds. Whether you're dealing with missing material or structural damage, our laser welding ensures strong, accurate repairs.",
          nestedList: [
            {
              title: "Laser Precision:",
              list: [
                "Welds as fine as 0.1 mm",
                "Aluminum, steel, stainless steel, and titanium welding",
              ],
            },
          ],
          cta: "Contact us to discuss how laser welding can extend the life of your molds.",
        },
        {
          title: "Laser Engraving",
          description: "Precision etching for lasting impressions",
          paragraph:
            "Logos, serial numbers, and custom text are precisely engraved into your molds or products using our Trumpf engraving laser. With the ability to handle parts up to 800 kg, our flexible laser arm allows for deep engraving in even the most difficult areas.",
          nestedList: [
            {
              title: "Applications:",
              list: [
                "Serial numbers, barcodes, and QR codes",
                "Logos and branding marks",
              ],
            },
          ],
          cta: "Get in touch to explore our engraving options for your project.",
        },
        {
          title: "High Gloss Polishing",
          description: "Turning surfaces into flawless mirrors",
          paragraph:
            "Achieving perfect surfaces starts with our high-gloss polishing services. We specialize in creating mirror-like finishes for injection molds and die-casting molds, ensuring your parts have sharp edges and flawless surfaces.",
          nestedList: [
            {
              title: "Expert Polishing for:",
              list: [
                "Housing parts",
                "Household items",
                "Cosmetic packaging",
                "Toys and gift items",
              ],
            },
            {
              title: "Additional Services:",
              list: [
                'Critical contour zones receive special "release polishing"',
                "Fine lapping for surface roughness reduction",
              ],
            },
          ],
          cta: "Contact us today to discuss how our high-gloss polishing can improve your product's appearance.",
        },
        {
          title: "Surface Grinding",
          description: "With state-of-the-art precision",
          paragraph:
            "Surface grinding is essential for achieving flat, smooth surfaces on your molds and tools. Our state-of-the-art machines can handle large workpieces with precision down to microns.",
          nestedList: [
            {
              title: "Capabilities:",
              list: [
                "Large workspaces up to 1000mm",
                "Precision grinding to reduce surface roughness",
              ],
            },
            {
              title: "Additional Services:",
              list: [
                'Critical contour zones receive special "release polishing"',
                "Fine lapping for surface roughness reduction",
              ],
            },
          ],
          cta: "Need precision grinding? Reach out to learn more about our services.",
        },
      ],
    },

    reparatur: {
      title: "Repair",
      paragraph: "Our repair and maintenance services",
      subServices: [
        {
          title: "Renovation",
          description: "Extend the life of your molds",
          paragraph:
            "We specialize in restoring worn-out molds and tools to their original condition, ensuring that they can continue to deliver optimal performance.",
          nestedList: [
            {
              title: "Capabilities:",
              list: [
                "Full mold renovation",
                "Material restoration through welding and machining",
              ],
            },
          ],
          cta: "Interested in renovating your tools? Contact our team for expert renovation services.",
        },
        {
          title: "Overhaul",
          description: "A complete overhaul of your molds",
          paragraph:
            "A complete overhaul involves disassembling, inspecting, and repairing your molds to bring them back to peak performance. We focus on addressing wear, tear, and any underlying issues that could affect future production.",
          nestedList: [
            {
              title: "Our Process",
              list: [
                "Full mold dissassembly",
                "Detailed inspection for damage or wear",
                "Repairs and upgrades as necessary",
              ],
            },
          ],
          cta: "Looking to overhaul your molds? Reach out for more details.",
        },
        {
          title: "Mold Repair",
          description: "Restore your molds",
          paragraph:
            "Our mold repair services address everything from surface damage to mechanical issues. Whether you need minor fixes or a complete rebuild, our team has the expertise to restore your molds to like-new condition.",
          nestedList: [
            {
              title: "Services Include:",
              list: [
                "Surface polishing for scratch repair",
                "Laser welding for structural integrity",
                "Detailed inspection and testing",
              ],
            },
          ],
          cta: "Contact us for fast and reliable mold repair services.",
        },
      ],
    },
  },

  contact: {
    title: "Contact Us",
    paragraph:
      "We'd love to hear from you! Whether you have a question, need a quote, or want to discuss a new project, don't hesitate to reach out to us.",
    phone: "Phone",
    hours: "Business Hours",
    opendays: "Monday - Friday: 7:00 AM - 4:00 PM",
    form: {
      title: "Contact Form",
      paragraph: "We will respond as soon as possible",
      textarea: "Enter your message here",
      submit: "Send",
    },
  },

  about: {
    title: "About Us",
    paragraph: "Mold Workshop, where innovation meets precision.",
    description:
      "In the heart of Reichelsheim, Odenwald, we specialize in turning your ideas into tangible results. Our fully equipped facility enables us to offer a comprehensive range of services from mold-making to high-precision machining.",
  },
} as const;
