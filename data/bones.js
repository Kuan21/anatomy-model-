// MJ Anatomy 3D
// Bone teaching database
// English + Traditional Chinese

export const BONES = [
  {
    id: "clavicle",
    aliases: ["clavicle", "clavicler", "claviclel"],
    en: "Clavicle",
    zh: "鎖骨",
    type: "Long bone.",
    typeZh: "長骨。",
    articulations: "Articulates medially with the manubrium and laterally with the acromion.",
    articulationsZh: "內側與胸骨柄形成胸鎖關節；外側與肩峰形成肩鎖關節。",
    landmarks: "Sternal end, acromial end, conoid tubercle, trapezoid line and subclavian groove.",
    landmarksZh: "胸骨端、肩峰端、錐狀結節、斜方線及鎖骨下肌溝。",
    attachments: "Attachments include sternocleidomastoid, pectoralis major, deltoid, trapezius and subclavius.",
    attachmentsZh: "相關肌肉附著包括胸鎖乳突肌、胸大肌、三角肌、斜方肌及鎖骨下肌。",
    clinical: "Commonly fractured near the junction of the middle and lateral thirds.",
    clinicalZh: "常見骨折位置為中三分之一與外側三分之一交界附近。"
  },
  {
    id: "scapula",
    aliases: ["scapula", "scapular", "scapulal"],
    en: "Scapula",
    zh: "肩胛骨",
    type: "Flat bone.",
    typeZh: "扁骨。",
    articulations: "Articulates with the humerus at the glenoid cavity and with the clavicle at the acromion.",
    articulationsZh: "於關節盂與肱骨形成盂肱關節；於肩峰與鎖骨形成肩鎖關節。",
    landmarks: "Spine, acromion, coracoid process, glenoid cavity, supraspinous fossa, infraspinous fossa and subscapular fossa.",
    landmarksZh: "肩胛岡、肩峰、喙突、關節盂、棘上窩、棘下窩及肩胛下窩。",
    attachments: "Major attachments include rotator cuff muscles, deltoid, trapezius, rhomboids, serratus anterior and long head of triceps.",
    attachmentsZh: "重要附著包括旋轉肌袖、三角肌、斜方肌、菱形肌、前鋸肌及肱三頭肌長頭。",
    clinical: "Scapular position and movement are important in shoulder mechanics; long thoracic nerve injury can produce scapular winging.",
    clinicalZh: "肩胛骨的位置與運動對肩部力學非常重要；胸長神經損傷可造成翼狀肩胛。"
  },
  {
    id: "humerus",
    aliases: ["humerus", "humerusr", "humerusl"],
    en: "Humerus",
    zh: "肱骨",
    type: "Long bone.",
    typeZh: "長骨。",
    articulations: "Articulates proximally with the scapula and distally with the radius and ulna.",
    articulationsZh: "近端與肩胛骨形成盂肱關節；遠端與橈骨、尺骨形成肘關節。",
    landmarks: "Head, anatomical neck, surgical neck, greater and lesser tubercles, intertubercular sulcus, deltoid tuberosity, radial groove, capitulum, trochlea and epicondyles.",
    landmarksZh: "肱骨頭、解剖頸、外科頸、大結節、小結節、結節間溝、三角肌粗隆、橈神經溝、肱骨小頭、滑車及內外上髁。",
    attachments: "Attachments include rotator cuff muscles, pectoralis major, latissimus dorsi, teres major, deltoid and forearm flexor/extensor groups.",
    attachmentsZh: "肌肉附著包括旋轉肌袖、胸大肌、背闊肌、大圓肌、三角肌及前臂屈肌／伸肌群。",
    clinical: "Surgical-neck fractures may endanger the axillary nerve; shaft fractures may injure the radial nerve.",
    clinicalZh: "外科頸骨折可能傷及腋神經；肱骨幹骨折可能傷及橈神經。"
  },
  {
    id: "radius",
    aliases: ["radius", "radiusr", "radiusl"],
    en: "Radius",
    zh: "橈骨",
    type: "Long bone of the lateral forearm.",
    typeZh: "前臂外側的長骨。",
    articulations: "Articulates with the capitulum of humerus, ulna and proximal carpal bones.",
    articulationsZh: "與肱骨小頭、尺骨以及近側腕骨形成關節。",
    landmarks: "Head, neck, radial tuberosity, interosseous border, ulnar notch and styloid process.",
    landmarksZh: "橈骨頭、橈骨頸、橈骨粗隆、骨間緣、尺切跡及橈骨莖突。",
    attachments: "Biceps brachii inserts on radial tuberosity; pronator and supinator muscles attach along the shaft.",
    attachmentsZh: "肱二頭肌止於橈骨粗隆；旋前及旋後肌群附著於橈骨幹。",
    clinical: "Distal radius fractures, including Colles fractures, are common after a fall onto an outstretched hand.",
    clinicalZh: "跌倒以手撐地時常發生橈骨遠端骨折，包括 Colles 骨折。"
  },
  {
    id: "ulna",
    aliases: ["ulna", "ulnar", "ulnal"],
    en: "Ulna",
    zh: "尺骨",
    type: "Long bone of the medial forearm.",
    typeZh: "前臂內側的長骨。",
    articulations: "Articulates with the trochlea of humerus and with the radius proximally and distally.",
    articulationsZh: "與肱骨滑車形成關節，並在近端及遠端與橈骨形成橈尺關節。",
    landmarks: "Olecranon, coronoid process, trochlear notch, radial notch, ulnar tuberosity, head and styloid process.",
    landmarksZh: "鷹嘴、冠突、滑車切跡、橈切跡、尺骨粗隆、尺骨頭及尺骨莖突。",
    attachments: "Triceps inserts on olecranon; brachialis inserts near the coronoid process and ulnar tuberosity.",
    attachmentsZh: "肱三頭肌止於鷹嘴；肱肌止於冠突及尺骨粗隆附近。",
    clinical: "The ulnar nerve passes posterior to the medial epicondyle adjacent to the proximal ulna.",
    clinicalZh: "尺神經經過肱骨內上髁後方、鄰近尺骨近端，因此此區受到撞擊時可產生明顯麻電感。"
  },

  // =========================
  // HAND
  // =========================
  {
    id: "scaphoid",
    aliases: ["scaphoid", "scaphoid bone"],
    en: "Scaphoid",
    zh: "舟骨（腕骨）",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates with radius, lunate, capitate, trapezium and trapezoid.",
    articulationsZh: "與橈骨、月骨、頭狀骨、大多角骨及小多角骨形成關節。",
    landmarks: "Scaphoid tubercle and waist.",
    landmarksZh: "舟骨結節及舟骨腰。",
    attachments: "Provides ligamentous attachments around the radial side of the wrist.",
    attachmentsZh: "為腕部橈側多條韌帶提供附著。",
    clinical: "The most commonly fractured carpal bone; proximal fragment is vulnerable to avascular necrosis.",
    clinicalZh: "最常骨折的腕骨；近端骨片因血供特性而有缺血性壞死風險。"
  },
  {
    id: "lunate",
    aliases: ["lunate", "lunate bone"],
    en: "Lunate",
    zh: "月骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates with radius, scaphoid, triquetrum, capitate and hamate.",
    articulationsZh: "與橈骨、舟骨、三角骨、頭狀骨及鉤骨形成關節。",
    landmarks: "Crescent-shaped proximal carpal bone.",
    landmarksZh: "近排腕骨中的新月形骨。",
    attachments: "Primarily ligamentous attachments.",
    attachmentsZh: "主要為腕部韌帶附著。",
    clinical: "Lunate dislocation can compress the median nerve.",
    clinicalZh: "月骨脫位可能壓迫正中神經。"
  },
  {
    id: "triquetrum",
    aliases: ["triquetrum", "triquetral"],
    en: "Triquetrum",
    zh: "三角骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates with lunate, hamate and pisiform.",
    articulationsZh: "與月骨、鉤骨及豌豆骨形成關節。",
    landmarks: "Pyramidal-shaped proximal carpal bone.",
    landmarksZh: "近排腕骨中的錐形骨。",
    attachments: "Provides ligamentous attachment in the ulnar wrist.",
    attachmentsZh: "為腕部尺側韌帶提供附著。",
    clinical: "Can be injured in falls onto an extended wrist.",
    clinicalZh: "腕關節伸展位跌倒時可能受傷。"
  },
  {
    id: "pisiform",
    aliases: ["pisiform", "pisiform bone"],
    en: "Pisiform",
    zh: "豌豆骨",
    type: "Sesamoid carpal bone.",
    typeZh: "籽骨型腕骨。",
    articulations: "Articulates with triquetrum.",
    articulationsZh: "與三角骨形成關節。",
    landmarks: "Small pea-shaped bone on palmar ulnar wrist.",
    landmarksZh: "位於腕掌側尺側的小型豌豆狀骨。",
    attachments: "Flexor carpi ulnaris inserts on the pisiform.",
    attachmentsZh: "尺側腕屈肌止於豌豆骨。",
    clinical: "Important surface landmark near Guyon's canal.",
    clinicalZh: "為 Guyon 管附近的重要體表解剖標誌。"
  },
  {
    id: "trapezium",
    aliases: ["trapezium", "trapezium bone"],
    en: "Trapezium",
    zh: "大多角骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates with scaphoid and first/second metacarpals.",
    articulationsZh: "與舟骨及第一、第二掌骨形成關節。",
    landmarks: "Tubercle and groove for flexor carpi radialis.",
    landmarksZh: "大多角骨結節及橈側腕屈肌腱溝。",
    attachments: "Ligamentous and thenar muscle attachments.",
    attachmentsZh: "具有韌帶及部分魚際肌附著。",
    clinical: "Forms the saddle-shaped carpometacarpal joint of the thumb.",
    clinicalZh: "參與形成拇指鞍狀腕掌關節。"
  },
  {
    id: "trapezoid",
    aliases: ["trapezoid", "trapezoid bone"],
    en: "Trapezoid",
    zh: "小多角骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates mainly with scaphoid, trapezium, capitate and second metacarpal.",
    articulationsZh: "主要與舟骨、大多角骨、頭狀骨及第二掌骨形成關節。",
    landmarks: "Small wedge-shaped distal carpal bone.",
    landmarksZh: "遠排腕骨中的小型楔形骨。",
    attachments: "Primarily ligamentous attachments.",
    attachmentsZh: "主要為韌帶附著。",
    clinical: "Relatively protected and less frequently fractured.",
    clinicalZh: "位置較受保護，骨折相對少見。"
  },
  {
    id: "capitate",
    aliases: ["capitate", "capitate bone"],
    en: "Capitate",
    zh: "頭狀骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Central carpal bone articulating with several surrounding carpals and the third metacarpal.",
    articulationsZh: "位於腕骨中央，與多個鄰近腕骨及第三掌骨形成關節。",
    landmarks: "Rounded head, neck and body.",
    landmarksZh: "具有頭、頸及體。",
    attachments: "Primarily ligamentous attachments.",
    attachmentsZh: "主要為韌帶附著。",
    clinical: "Central component of wrist mechanics.",
    clinicalZh: "是腕部力學的重要中央骨性結構。"
  },
  {
    id: "hamate",
    aliases: ["hamate", "hamate bone"],
    en: "Hamate",
    zh: "鉤骨",
    type: "Carpal bone.",
    typeZh: "腕骨。",
    articulations: "Articulates with triquetrum, capitate and fourth/fifth metacarpals.",
    articulationsZh: "與三角骨、頭狀骨及第四、第五掌骨形成關節。",
    landmarks: "Hook of hamate.",
    landmarksZh: "鉤骨鉤。",
    attachments: "Flexor retinaculum and hypothenar-related attachments.",
    attachmentsZh: "屈肌支持帶及小魚際相關結構附著。",
    clinical: "Hook fractures may affect the ulnar nerve or artery in the hand.",
    clinicalZh: "鉤骨鉤骨折可能影響手部尺神經或尺動脈。"
  },

  // =========================
  // PELVIS / LOWER LIMB
  // =========================
  {
    id: "hip_bone",
    aliases: ["hip bone", "hip_bone", "coxal", "os coxae"],
    en: "Hip bone (Os coxae)",
    zh: "髖骨",
    type: "Irregular bone formed by ilium, ischium and pubis.",
    typeZh: "由髂骨、坐骨及恥骨融合形成的不規則骨。",
    articulations: "Articulates with sacrum posteriorly and femoral head at the acetabulum.",
    articulationsZh: "後方與薦骨形成薦髂關節；髖臼與股骨頭形成髖關節。",
    landmarks: "Iliac crest, ASIS, AIIS, acetabulum, obturator foramen, ischial spine and ischial tuberosity.",
    landmarksZh: "髂嵴、髂前上棘、髂前下棘、髖臼、閉孔、坐骨棘及坐骨結節。",
    attachments: "Provides extensive attachment for abdominal, gluteal, hip and thigh muscles.",
    attachmentsZh: "為腹肌、臀肌、髖部及大腿肌群提供大量附著點。",
    clinical: "Pelvic fractures may be associated with major vascular or visceral injury.",
    clinicalZh: "骨盆骨折可能伴隨重要血管或盆腔臟器損傷。"
  },
  {
    id: "femur",
    aliases: ["femur", "femurr", "femurl"],
    en: "Femur",
    zh: "股骨",
    type: "Long bone; the longest and strongest bone in the body.",
    typeZh: "長骨；人體最長且非常強韌的骨。",
    articulations: "Articulates with acetabulum proximally and tibia/patella distally.",
    articulationsZh: "近端與髖臼形成髖關節；遠端與脛骨及髕骨形成膝關節。",
    landmarks: "Head, neck, greater/lesser trochanters, linea aspera, medial/lateral condyles and epicondyles.",
    landmarksZh: "股骨頭、股骨頸、大／小轉子、粗線、內／外側髁及內／外上髁。",
    attachments: "Major attachments include gluteal muscles, iliopsoas, adductors, quadriceps and gastrocnemius.",
    attachmentsZh: "重要附著包括臀肌、髂腰肌、內收肌群、股四頭肌及腓腸肌。",
    clinical: "Femoral neck fractures can compromise blood supply to the femoral head.",
    clinicalZh: "股骨頸骨折可能影響股骨頭血液供應。"
  },
  {
    id: "patella",
    aliases: ["patella", "patellar"],
    en: "Patella",
    zh: "髕骨",
    type: "Sesamoid bone within the quadriceps tendon.",
    typeZh: "位於股四頭肌腱內的籽骨。",
    articulations: "Articulates with the patellar surface of femur.",
    articulationsZh: "與股骨髕面形成髕股關節。",
    landmarks: "Base, apex and medial/lateral articular facets.",
    landmarksZh: "髕骨底、髕骨尖及內、外側關節面。",
    attachments: "Quadriceps tendon attaches superiorly; patellar ligament extends from apex to tibial tuberosity.",
    attachmentsZh: "上方連接股四頭肌腱；髕韌帶由髕骨尖延伸至脛骨粗隆。",
    clinical: "Improves the mechanical leverage of quadriceps; can dislocate laterally.",
    clinicalZh: "增加股四頭肌伸膝的力臂；臨床可出現髕骨外側脫位。"
  },
  {
    id: "tibia",
    aliases: ["tibia", "tibiar", "tibial"],
    en: "Tibia",
    zh: "脛骨",
    type: "Long bone; major weight-bearing bone of the leg.",
    typeZh: "長骨；小腿主要承重骨。",
    articulations: "Articulates with femur, fibula and talus.",
    articulationsZh: "與股骨、腓骨及距骨形成關節。",
    landmarks: "Medial/lateral condyles, tibial tuberosity, anterior border, soleal line and medial malleolus.",
    landmarksZh: "內／外側髁、脛骨粗隆、前緣、比目魚肌線及內踝。",
    attachments: "Patellar ligament attaches to tibial tuberosity; multiple leg muscles attach to the shaft.",
    attachmentsZh: "髕韌帶附著於脛骨粗隆；多條小腿肌肉附著於脛骨幹。",
    clinical: "Anterior tibial surface is subcutaneous and vulnerable to direct trauma.",
    clinicalZh: "脛骨前面位置表淺，容易受到直接撞擊。"
  },
  {
    id: "fibula",
    aliases: ["fibula", "fibular", "fibulal"],
    en: "Fibula",
    zh: "腓骨",
    type: "Slender long bone of lateral leg.",
    typeZh: "位於小腿外側的細長長骨。",
    articulations: "Articulates with tibia proximally and distally; contributes to ankle mortise.",
    articulationsZh: "近端及遠端與脛骨形成關節，並參與形成踝穴。",
    landmarks: "Head, neck, shaft and lateral malleolus.",
    landmarksZh: "腓骨頭、腓骨頸、骨幹及外踝。",
    attachments: "Provides attachment for several leg muscles including fibularis muscles and part of soleus.",
    attachmentsZh: "為多條小腿肌肉提供附著，包括腓骨肌群及部分比目魚肌。",
    clinical: "Common fibular nerve winds around the fibular neck and is vulnerable to injury.",
    clinicalZh: "腓總神經繞過腓骨頸，該位置較容易受傷。"
  },
  {
    id: "talus",
    aliases: ["talus", "talus bone"],
    en: "Talus",
    zh: "距骨",
    type: "Tarsal bone.",
    typeZh: "跗骨。",
    articulations: "Articulates with tibia, fibula, calcaneus and navicular.",
    articulationsZh: "與脛骨、腓骨、跟骨及舟骨形成關節。",
    landmarks: "Body, neck, head and trochlea.",
    landmarksZh: "距骨體、頸、頭及滑車。",
    attachments: "No muscles attach directly to the talus.",
    attachmentsZh: "距骨沒有肌肉直接附著。",
    clinical: "Much of its surface is articular cartilage; fractures can threaten its blood supply.",
    clinicalZh: "距骨大部分表面被關節軟骨覆蓋；骨折可能影響其血液供應。"
  },
  {
    id: "calcaneus",
    aliases: ["calcaneus", "calcaneal"],
    en: "Calcaneus",
    zh: "跟骨",
    type: "Tarsal bone; largest bone of the foot.",
    typeZh: "跗骨；足部最大的骨。",
    articulations: "Articulates with talus and cuboid.",
    articulationsZh: "與距骨及骰骨形成關節。",
    landmarks: "Calcaneal tuberosity, sustentaculum tali and fibular trochlea.",
    landmarksZh: "跟骨粗隆、距骨載台及腓骨肌滑車。",
    attachments: "Calcaneal tendon inserts posteriorly; several intrinsic foot muscles originate from it.",
    attachmentsZh: "跟腱止於其後面；多條足內在肌由跟骨起始。",
    clinical: "Can fracture after high-energy axial loading such as a fall from height.",
    clinicalZh: "從高處墜落造成強烈軸向負荷時可發生跟骨骨折。"
  }
];

function normalize(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/[_\-\.]/g, " ")
    .replace(/\d+/g, " ")
    .replace(/\b(left|right)\b/g, " ")
    .replace(/\b(l|r)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findBone(name = "") {
  const n = normalize(name);

  if (!n) return null;

  for (const bone of BONES) {
    const terms = [
      bone.id,
      bone.en,
      ...(bone.aliases || [])
    ].map(normalize);

    if (terms.some(term => term && (n === term || n.includes(term)))) {
      return bone;
    }
  }

  for (const bone of BONES) {
    const terms = [
      bone.id,
      bone.en,
      ...(bone.aliases || [])
    ].map(normalize);

    if (terms.some(term => term && term.length > 4 && term.includes(n))) {
      return bone;
    }
  }

  // Generic metacarpals
  if (n.includes("metacarpal")) {
    return {
      id: "metacarpal",
      en: "Metacarpal",
      zh: "掌骨",
      type: "Long bone of the hand.",
      typeZh: "手部長骨。",
      articulations: "Articulates proximally with carpal bones and distally with a proximal phalanx.",
      articulationsZh: "近端與腕骨、遠端與近節指骨形成關節。",
      landmarks: "Base, shaft and head.",
      landmarksZh: "掌骨底、掌骨體及掌骨頭。",
      attachments: "Provides attachment for interossei and several extrinsic/intrinsic hand muscles.",
      attachmentsZh: "為骨間肌及多條手部內、外在肌提供附著。",
      clinical: "Metacarpal fractures are common hand injuries.",
      clinicalZh: "掌骨骨折是常見手部損傷。"
    };
  }

  // Generic phalanges
  if (n.includes("phalan") || n.includes("phalange")) {
    return {
      id: "phalanx",
      en: "Phalanx",
      zh: "指骨／趾骨",
      type: "Long bone of a digit.",
      typeZh: "手指或足趾的長骨。",
      articulations: "Participates in metacarpophalangeal/metatarsophalangeal or interphalangeal joints depending on position.",
      articulationsZh: "依所在位置參與掌指／蹠趾關節或指／趾間關節。",
      landmarks: "Base, shaft and head.",
      landmarksZh: "底、體及頭。",
      attachments: "Receives flexor, extensor and intrinsic digital muscle/tendon attachments depending on the digit.",
      attachmentsZh: "依不同手指或足趾接受屈肌、伸肌及內在肌腱附著。",
      clinical: "Phalangeal fractures and interphalangeal joint injuries are common.",
      clinicalZh: "指骨／趾骨骨折及指／趾間關節損傷相當常見。"
    };
  }

  return null;
}
