// Edit this file to update the page. Everything else can stay as is.
// { date: 'Jul. 2026', text: '<a href="https://codeshim.github.io/transpace/">TranSpace</a> is recommended for oral presentation at ACM Multimedia (MM) 2026.' },
window.SITE = {
  news: [
    { date: 'Aug. 2026', text: '<a href="https://codeshim.github.io/transpace/">TranSpace</a> is selected for Oral Presentation at ACM Multimedia (MM) 2026.' },
    { date: 'Aug. 2026', text: 'Neighborhood is accepted to ACM UIST 2026.' },
    { date: 'Jul. 2026', text: '<a href="https://codeshim.github.io/transpace/">TranSpace</a> is accepted to ACM Multimedia (MM) 2026.' },
    { date: 'Nov. 2025', text: '<a href="https://hayleymol.github.io/VoronoiRooms_TOG/">Voronoi Rooms</a> is accepted to ACM Transactions on Graphics (TOG).' },
    { date: 'Nov. 2025', text: '<a href="https://www.meta.com/ko-kr/experiences/parameterroom/24417022141334169/#description">ParameterRooms</a> is launched in Meta Quest platform (Early Access).' },
    { date: 'Jun. 2025', text: '<a href="https://jhkang0408.github.io/RTUGVADTE/">Our paper</a> is accepted to IEEE Transactions on Visualization and Computer Graphics (TVCG).' },
    { date: 'Oct. 2024', text: 'Our ISMAR demo received the Best Demo Honorable Mention Award.' }
  ],

  // selected: true  -> also shown in the "Selected" tab
  // thumb: path to an image in assets/, or null for the striped placeholder
  // links: [label, url] pairs
  // venue: 'ACM Multimedia', year: 2026, award: 'Oral',
  publications: [
    {
      selected: true,
      order: 2,
      title: 'Neighborhood: Dynamic Spatial Alignment for Traversable Telepresence Across Remote Spaces',
      authors: ['Taehei Kim', 'Hyeshim Kim', 'Jihun Shin', 'Hyeonjin Kim', 'Sung-Hee Lee'],
      venue: 'ACM UIST', year: 2026, award: '',
      desc: 'Aligns multiple remote spaces to create a traversable neighborhood, allowing users to walk into each other\'s spaces.',
      thumb: 'assets/thumb/uist_2026_thumb.png',
      links: [['Paper', 'assets/neighborhood_uist_2026.pdf'],]
    },
    {
      selected: true,
      order: 1,
      title: 'TranSpace: Progressive Anchoring for Metric-Consistent Scene Synthesis',
      authors: ['Hyeshim Kim', 'Taehei Kim*', 'Jihun Shin*', 'Hyeonjin Kim', 'Sung-Hee Lee'],
      venue: 'ACM Multimedia', year: 2026, award: 'Oral',
      desc: 'Synthesizes transition spaces between overlapping rooms while progressively anchoring generated geometry to preserve metric consistency.',
      thumb: 'assets/thumb/mm_2026_thumb.png',
      links: [['Project', 'https://codeshim.github.io/transpace/'], ['Paper', 'assets/transpace_MM_2026.pdf'], ['Code', 'https://github.com/codeshim/transpace']],
      bibtex: `@inproceedings{kim2026transpace,
  title     = {TranSpace: Progressive Anchoring for Metric-Consistent Scene Synthesis},
  author    = {Kim, Hyeshim and Kim, Taehei and Shin, Jihun and Kim, Hyeonjin and Lee, Sung-Hee},
  booktitle = {Proceedings of the 34th ACM International Conference on Multimedia (MM '26)},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3767308.3836316}
}`
    }, 
    {
      selected: true,
      order: 3,
      title: 'Voronoi Rooms: Dynamic Visibility Modulation of Overlapping Spaces for Telepresence',
      authors: ['Taehei Kim', 'Jihun Shin', 'Hyeshim Kim', 'Hyuckjin Jang', 'Jiho Kang', 'Sung-Hee Lee'],
      venue: 'ACM TOG', year: 2025, award: '',
      desc: 'Dynamically modulates visibility of overlapping remote spaces based on user locations using Voronoi regions.',
      thumb: 'assets/thumb/tog_2025_thumb.png',
      links: [['Project', 'https://hayleymol.github.io/VoronoiRooms_TOG/'], ['Paper', 'assets/voronoirooms_TOG_2026.pdf']],
      bibtex: `@article{10.1145/3777900,
  author = {Kim, Taehei and Shin, Jihun and Kim, Hyeshim and Jang, Hyuckjin and Kang, Jiho and Lee, Sung-Hee},
  title = {Voronoi Rooms: Dynamic Visibility Modulation of Overlapping Spaces for Telepresence},
  year = {2025},
  publisher = {Association for Computing Machinery},
  volume = {45},
  number = {2},
  doi = {10.1145/3777900},
  journal = {ACM Transactions on Graphics}
}`
    },
    {
      selected: false,
      title: 'Real-Time Translation of Upper-Body Gestures to Virtual Avatars in Dissimilar Telepresence Environments',
      authors: ['Jiho Kang', 'Taehei Kim', 'Hyeshim Kim', 'Sung-Hee Lee'],
      venue: 'IEEE TVCG', year: 2025, award: '',
      desc: 'Translates upper-body gestures in real time so avatars convey users\' intended movements across dissimilar remote spaces.',
      thumb: 'assets/thumb/tvcg_2025_thumb.png',
      links: [['Project', 'https://jhkang0408.github.io/RTUGVADTE/']],
      bibtex: `@article{kang2025real,
  title={Real-time Translation of Upper-body Gestures to Virtual Avatars in Dissimilar Telepresence Environments},
  author={Kang, Jiho and Kim, Taehei and Kim, Hyeshim and Lee, Sung-Hee},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2025},
  publisher={IEEE}
}`
    },
    {
      selected: false,
      title: 'Evaluating User Perception Toward Physics-Adapted Avatars in Remote Heterogeneous Spaces',
      authors: ['Taehei Kim', 'Hyeshim Kim', 'Jeongmi Lee', 'Sung-Hee Lee'],
      venue: 'Computers & Graphics', year: 2025, award: '',
      desc: 'Studies how users perceive and prefer physics-adapted avatars when remote spaces do not match.',
      thumb: 'assets/thumb/c&g_2025_thumb.png',
      links: [['Paper', 'https://www.sciencedirect.com/science/article/pii/S009784932500024X']],
      bibtex: `@article{kim2025evaluating,
  title={Evaluating user perception toward physics-adapted avatar in remote heterogeneous spaces},
  author={Kim, Taehei and Kim, Hyeshim and Lee, Jeongmi and Lee, Sung-Hee},
  journal={Computers \\& Graphics},
  volume={128},
  pages={104185},
  year={2025},
  publisher={Elsevier}
}`
    },
    {
      selected: false,
      title: 'Visibility Modulation of Aligned Spaces for Multi-User Telepresence',
      authors: ['Taehei Kim', 'Jihun Shin', 'Hyeshim Kim', 'Hyuckjin Jang', 'Jiho Kang', 'Sung-Hee Lee'],
      venue: 'IEEE ISMAR (Demo)', year: 2024, award: 'Best Demo Honorable Mention',
      desc: 'Demonstrates dynamic visibility modulation of aligned spaces for multi-user MR telepresence.',
      thumb: 'assets/thumb/ismar_2024_thumb.png',
      links: [['News', 'https://lava.kaist.ac.kr/?p=7465']]
    }
  ]
};
