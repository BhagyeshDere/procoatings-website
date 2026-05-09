// data/services.js

export const servicesData = {
  "waterproofing": {
    title: "Waterproofing Solutions",
    description: "Comprehensive structural protection systems designed to eliminate water ingress and protect structural integrity.",
    subServices: [
      {
        slug: "basement-waterproofing",
        title: "Basement Waterproofing",
        image: "/images/services/basement1.png",
        gallery: [
          "/images/services/basement1.png",
          "/images/services/basement2.png",
          "/images/services/basement3.png"
        ],
        description: "Specialized pressure-resistant membrane systems engineered for below-ground concrete structures.",
        advantages: ["Hydrostatic Pressure Resistance", "Positive & Negative Side Treatment", "Seamless Moisture Barrier", "Prevents Structural Decay"]
      },
      {
        slug: "terrace-roof-solution",
        title: "Terrace Roof Solution",
        image: "/images/services/terraceroof.png",
        gallery: [
          "/images/services/terraceroof.jpeg",
          "/images/services/terraceroof-2.jpeg",
          "/images/services/terraceroof-3.jpeg"
        ],
        description: "High-durability weatherproofing and elastomeric coatings for exposed roof surfaces and terraces.",
        advantages: ["Superior UV Stability", "Thermal Insulation Support", "Excellent Crack-Bridging", "Weather Resistance"]
      },
      {
        slug: "podium-waterproofing",
        title: "Podium Waterproofing",
        image: "/images/services/podium1.png",
        gallery: [
          "/images/services/podium1.png",
          "/images/services/podium2.png",
          "/images/services/podium3.png"
        ],
        description: "Heavy-duty waterproofing designed to withstand soil load and traffic on landscaped podiums.",
        advantages: ["Root Penetration Resistance", "Heavy Traffic Load Bearing", "Multi-layer Defense", "Puncture Resistant"]
      },
      {
        slug: "structural-anti-carbonation",
        title: "Structural Anti-Carbonation",
        image: "/images/services/carbonation1.png",
        gallery: [
          "/images/services/carbonation1.png",
          "/images/services/carbonation2.png",
          "/images/services/carbonation3.png"
        ],
        description: "Advanced protective coatings that prevent CO2 ingress and preserve reinforced concrete longevity.",
        advantages: ["CO2 Diffusion Resistance", "Breathable Material", "Chloride Ion Barrier", "Extended Structure Life"]
      },
      {
        slug: "external-walls",
        title: "External Walls",
        image: "/images/services/external-walls.jpeg",
        gallery: [
          "/images/services/external-walls.jpeg",
          "/images/services/external-walls-2.jpeg",
          "/images/services/external-walls-3.jpeg"
        ],
        description: "Exterior barrier systems designed to shield facades against vertical moisture and rain ingress.",
        advantages: ["Elastomeric Crack-Bridging", "Weatherproof Sealing", "Anti-Fungal Protection", "Maintains Facade Aesthetics"]
      }
    ]
  },
  // Corrected key to match your folder 'industrial-flooring'
  "industrial-flooring": {
    title: "Industrial Floor Coatings",
    description: "High-performance surfacing solutions for warehouses, factories, and cleanroom environments.",
    subServices: [
      {
        slug: "high-performance-epoxy-flooring",
        title: "High-Performance Epoxy Flooring",
        image: "/images/services/epoxy.jpeg",
        gallery: [
          "/images/services/epoxy.jpeg",
          "/images/services/epoxy-2.jpeg",
          "/images/services/epoxy-3.jpeg"
        ],
        description: "Industrial-grade epoxy resins providing superior chemical resistance and mechanical durability.",
        advantages: ["Oil & Chemical Resistant", "Impact & Abrasion Guard", "Easy to Sanitize", "Seamless Hygienic Finish"]
      },
      {
        slug: "heavy-duty-pu-floor",
        title: "Heavy-Duty PU Floor",
        image: "/images/services/pu1.png",
        gallery: [
          "/images/services/pu1.png",
          "/images/services/pu2.png",
          "/images/services/pu3.png"
        ],
        description: "Impact-resistant polyurethane systems built for thermal shock and extreme manufacturing conditions.",
        advantages: ["Thermal Shock Resistance", "Antimicrobial Properties", "Slip-Resistant Surface", "High Flexibility"]
      },
      {
        slug: "anti-static-esd-flooring",
        title: "Anti-Static (ESD) Flooring",
        image: "/images/services/esd1.png",
        gallery: [
          "/images/services/esd1.png",
          "/images/services/esd2.png",
          "/images/services/esd3.png"
        ],
        description: "Specialized conductive flooring engineered to safely dissipate static electricity in electronics zones.",
        advantages: ["Controlled Conductivity", "Static Damage Prevention", "Consistent Earthing", "Dust-Free Environment"]
      },
      {
        slug: "dielectric-safety-coating",
        title: "Dielectric Safety Coating",
        image: "/images/services/dielectric.jpeg",
        gallery: [
          "/images/services/dielectric.jpeg",
          "/images/services/dielectric-2.jpeg",
          "/images/services/dielectric-3.jpeg"
        ],
        description: "Non-conductive insulating systems designed for high-voltage electrical rooms and substations.",
        advantages: ["High Breakdown Voltage", "Electrical Shock Protection", "Flame Retardant Properties", "Safety Standard Compliance"]
      },
     {
  slug: "formula-one-grade-finish",
  title: "Floor Densification",
  image: "/images/services/elite1.png",
  gallery: [
    "/images/services/elite1.png",
    "/images/services/elite2.png",
    "/images/services/elite3.png"
  ],
  description: "A high-performance chemical treatment that penetrates deep into the concrete silica to increase density, eliminate dusting, and create a diamond-hard, liquid-repellent surface.",
  advantages: [
    "Permanent Dust-Proofing",
    "Abrasion & Impact Resistance",
    "Superior Ambient Light Reflectivity",
    "Low-Maintenance Polished Finish"
  ]
},
      {
        slug: "anti-skid-surface-treatment",
        title: "Anti-Skid Surface Treatment",
        image: "/images/services/antiskid.png",
        gallery: [
          "/images/services/antiskid.png",
          "/images/services/antiskid-2.png",
          "/images/services/antiskid-3.png"
        ],
        description: "Safety-focused high-traction surfacing to prevent slips and accidents in industrial workplaces.",
        advantages: ["Enhanced Wet Grip", "Customizable Textures", "Heavy-Duty Wear Life", "Accident Risk Reduction"]
      }
    ]
  },
  "protective-coatings": {
    title: "Protective Coatings",
    description: "Advanced chemical barriers for the preservation of metal and concrete assets.",
    subServices: [
      {
        slug: "anti-corrosive-layering",
        title: "Anti-Corrosive Layering",
        image: "/images/services/corrosion.jpeg",
        gallery: [
          "/images/services/corrosion.jpeg",
          "/images/services/corrosion-2.jpeg",
          "/images/services/corrosion-3.jpeg"
        ],
        description: "High-build protective coatings designed to prevent metal oxidation in aggressive environments.",
        advantages: ["Salt Spray Resistance", "Zinc-Rich Protection", "Rust Growth Inhibition", "Aggressive Environment Guard"]
      },
      {
        slug: "fire-retardant-coating",
        title: "Fire Retardant Coating",
        image: "/images/services/fire1.png",
        gallery: [
          "/images/services/fire1.png",
          "/images/services/fire2.png",
          "/images/services/fire3.png"
        ],
        description: "Intumescent coatings that provide critical passive fire protection for structural integrity.",
        advantages: ["Slows Heat Transfer", "Structural Integrity Guard", "Low Smoke Emission", "Certified Safety Rating"]
      },
      {
        slug: "heat-reflective-roof-coating",
        title: "Heat Reflective Roof Coating",
        image: "/images/services/heat.jpeg",
        gallery: [
          "/images/services/heat.jpeg",
          "/images/services/heat-2.jpeg",
          "/images/services/heat-3.jpeg"
        ],
        description: "High-albedo solar-reflective coatings that reduce heat absorption and building energy costs.",
        advantages: ["Significant Temperature Drop", "Reduced HVAC Load", "UV Radiation Blocking", "Sustainable Energy Saving"]
      },
      {
        slug: "metal-roof-restoration",
        title: "Metal Roof Restoration",
        image: "/images/services/roof1.png",
        gallery: [
          "/images/services/roof1.png",
          "/images/services/roof2.png",
          "/images/services/roof3.png"
        ],
        description: "Comprehensive restoration systems for industrial metal roofs to prevent leaks and rust.",
        advantages: ["Leak Prevention", "Rust Conversion", "Thermal Expansion Ready", "Cost-Effective Restoration"]
      },
      {
        slug: "electrical-insulation",
        title: "Electrical Insulation",
        image: "/images/services/insulation.png",
        gallery: [
          "/images/services/insulation.png",
          "/images/services/insulation2.png",
          "/images/services/insulation3.png"
        ],
        description: "Insulating coatings designed to safeguard electrical equipment from moisture and arc hazards.",
        advantages: ["High Dielectric Strength", "Arc Resistance", "Moisture Barrier", "Prevents Current Leakage"]
      },
      {
        slug: "customized-systems",
        title: "Customized Systems",
        image: "/images/services/carbonation2.png",
        gallery: [
          "/images/services/carbonation2.png",
          "/images/services/insulation2.png",
          "/images/services/heat-2.jpeg"
        ],
        description: "Bespoke engineered solutions tailored for unique site-specific industrial challenges.",
        advantages: ["Site-Specific Formulation", "Hybrid Technology Integration", "Expert Consultation", "Targeted Problem Solving"]
      }
    ]
  },
  // Matches your folder name 'residential-commercial-flooring'
  // CHANGE THIS KEY to match the NEW folder name
  "residential-commercial": { 
    title: "Residential & Commercial",
    description: "Architectural flooring systems that bridge the gap between decorative aesthetics and industrial-grade durability.",
    subServices: [
      {
        slug: "car-deck-systems",
        title: "Car Deck Systems",
        image: "/images/services/car.png",
        gallery: [
          "/images/services/car.png",
          "/images/services/car2.png",
          "/images/services/car3.png"
        ],
        description: "Heavy-duty car park protection designed for high-traffic abrasion and waterproofing.",
        advantages: ["Vehicle Abrasion Resistance", "Anti-Skid Safety", "Oil & Stain Proof", "Structural Slab Protection"]
      },
      {
        slug: "anti-skid-flooring",
        title: "Anti-Skid Flooring",
        image: "/images/services/antiskid1.png",
        gallery: [
          "/images/services/antiskid1.png",
          "/images/services/antiskid2.png",
          "/images/services/antiskid3.png"
        ],
        description: "Slip resistant performance flooring solutions engineered for safety-critical zones.",
        advantages: ["High Surface Traction", "Durable Commercial Grade", "Slip Prevention", "Easy Maintenance"]
      },
      {
        slug: "textured-pu-floor",
        title: "Textured PU Floor",
        image: "/images/services/textured1.png",
        gallery: [
          "/images/services/textured1.png",
          "/images/services/textured2.png",
          "/images/services/textured3.png"
        ],
        description: "Decorative polyurethane flooring with resilient finishes for premium commercial spaces.",
        advantages: ["Upscale Aesthetic Finish", "Soft-Step Ergonomics", "Superior Stain Resistance", "Architectural Durability"]
      },
      {
        slug: "bathroom-sealing-grouting",
        title: "Bathroom Sealing & Grouting",
        image: "/images/services/bathroom1.png",
        gallery: [
          "/images/services/bathroom1.png",
          "/images/services/bathroom2.png",
          "/images/services/bathroom3.png"
        ],
        description: "Water-tight epoxy sealing systems to prevent dampness and seepage in residential wet areas.",
        advantages: ["Anti-Fungal Protection", "Deep Penetrating Seal", "Zero Capillary Seepage", "Stain-Resistant Joints"]
      }
    ]
  },
  "floor-densification": {
    title: "Floor Densification",
    description: "Molecular hardening of concrete surfaces to increase durability and eliminate dusting.",
    subServices: [
      {
        slug: "lithium-based-densifier",
        title: "Lithium-Based Densifier",
        image: "/images/services/lithium.png",
        gallery: [
          "/images/services/lithium.jpeg",
          "/images/services/lithium-2.jpeg",
          "/images/services/lithium-3.jpeg"
        ],
        description: "Advanced nano-lithium technology that penetrates concrete to eliminate dusting permanently.",
        advantages: ["Nano-Molecular Penetration", "Eliminates Concrete Dusting", "No Surface Peeling", "Enhanced Hardness"]
      },
      {
        slug: "sodium-based-hardener",
        title: "Sodium-Based Hardener",
        image: "/images/services/sodium.png",
        gallery: [
          "/images/services/sodium.jpeg",
          "/images/services/sodium-2.jpeg",
          "/images/services/sodium-3.jpeg"
        ],
        description: "Deep-penetrating concrete hardener for traditional industrial solidification and dust-proofing.",
        advantages: ["Deep Surface Solidification", "Cost-Effective Hardening", "Abrasion Resistance", "Improved Service Life"]
      },
      {
        slug: "ashford-formula-system",
        title: "Ashford Formula System",
        image: "/images/services/ashford.png",
        gallery: [
          "/images/services/ashford.jpeg",
          "/images/services/ashford-2.jpeg",
          "/images/services/ashford-3.jpeg"
        ],
        description: "Catalytic densification treatment creating a marble-like lustre and permanent dust-free concrete.",
        advantages: ["Life-long Performance", "Marble-like Lustre", "Permanent Dust-Proofing", "Increased Load Bearing"]
      }
    ]
  }
};