// Edit this file to update the page. Everything else can stay as is.
window.SITE = {
  news: [
    { date: 'Jul. 2026', text: 'TranSpace is accepted to ACM Multimedia 2026 as an Oral presentation.' },
    { date: 'Jun. 2026', text: 'Neighborhood is accepted to ACM UIST 2026.' },
    { date: 'Nov. 2025', text: 'Voronoi Rooms appears in ACM Transactions on Graphics.' },
    { date: 'Aug. 2025', text: 'Started my Ph.D. at KAIST in the LAVA Lab, advised by Prof. Sung-Hee Lee.' },
    { date: 'Oct. 2024', text: 'Our ISMAR demo received a Best Demo Honorable Mention Award in Seattle.' }
  ],

  // selected: true  -> also shown in the "Selected" tab
  // thumb: path to an image in assets/, or null for the striped placeholder
  // links: [label, url] pairs
  publications: [
    {
      selected: true,
      title: 'TranSpace: Progressive Anchoring for Metric-Consistent Scene Synthesis',
      authors: ['Hyeshim Kim', 'Taehei Kim*', 'Jihun Shin*', 'Hyeonjin Kim', 'Sung-Hee Lee'],
      venue: 'ACM Multimedia', year: 2026, award: 'Oral',
      desc: 'Synthesizes the transition space between two overlapping rooms by anchoring geometry progressively, so the generated scene keeps a consistent metric scale.',
      thumb: null,
      links: [['Project', '#'], ['Paper', '#'], ['Code', '#'], ['BibTeX', '#']]
    },
    {
      selected: true,
      title: 'Neighborhood: Dynamic Spatial Alignment for Traversable Telepresence Across Remote Spaces',
      authors: ['Taehei Kim', 'Hyeshim Kim', 'Jihun Shin', 'Hyeonjin Kim', 'Sung-Hee Lee'],
      venue: 'ACM UIST', year: 2026, award: '',
      desc: 'Aligns two remote floor plans on the fly so users can walk between each other\u2019s spaces without colliding with the real room.',
      thumb: null,
      links: [['Project', '#'], ['Paper', '#'], ['Video', '#'], ['BibTeX', '#']]
    },
    {
      selected: true,
      title: 'Voronoi Rooms: Dynamic Visibility Modulation of Overlapping Spaces for Telepresence',
      authors: ['Taehei Kim', 'Jihun Shin', 'Hyeshim Kim', 'Hyuckjin Jang', 'Jiho Kang', 'Sung-Hee Lee'],
      venue: 'ACM TOG', year: 2025, award: '',
      desc: 'Partitions a shared space into Voronoi regions and modulates what each user sees, letting several people occupy overlapping physical areas.',
      thumb: null,
      links: [['Project', '#'], ['Paper', '#'], ['Code', '#'], ['BibTeX', '#']]
    },
    {
      selected: false,
      title: 'Real-Time Translation of Upper-Body Gestures to Virtual Avatars in Dissimilar Telepresence Environments',
      authors: ['Jiho Kang', 'Taehei Kim', 'Hyeshim Kim', 'Sung-Hee Lee'],
      venue: 'IEEE TVCG', year: 2025, award: '',
      desc: 'Retargets upper-body gesture in real time so avatar behaviour still reads correctly when the two rooms differ in layout.',
      thumb: null,
      links: [['Paper', '#'], ['BibTeX', '#']]
    },
    {
      selected: false,
      title: 'Evaluating User Perception Toward Physics-Adapted Avatars in Remote Heterogeneous Spaces',
      authors: ['Taehei Kim', 'Hyeshim Kim', 'Jeongmi Lee', 'Sung-Hee Lee'],
      venue: 'Computers & Graphics', year: 2025, award: '',
      desc: 'A user study on how physically adapted avatars are perceived when remote spaces do not match.',
      thumb: null,
      links: [['Paper', '#'], ['BibTeX', '#']]
    },
    {
      selected: false,
      title: 'Visibility Modulation of Aligned Spaces for Multi-User Telepresence',
      authors: ['Taehei Kim', 'Jihun Shin', 'Hyeshim Kim', 'Hyuckjin Jang', 'Jiho Kang', 'Sung-Hee Lee'],
      venue: 'IEEE ISMAR (Demo)', year: 2024, award: 'Best Demo Honorable Mention',
      desc: 'Live demonstration of aligned-space visibility modulation for several simultaneous users.',
      thumb: null,
      links: [['Video', '#'], ['Abstract', '#'], ['BibTeX', '#']]
    }
  ]
};
