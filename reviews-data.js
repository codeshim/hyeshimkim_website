// Paper Reviews page content.
// `pdf`   — path to the slide deck in assets/ (shown in an inline viewer inside the card).
// `pages` — free text under the venue, e.g. '32 slides'. Leave '' to omit.
window.REVIEWS = {
  topics: ['All', 'Graphics', 'Vision', 'AI'],
  items: [
    {
      title: 'Text2Room: Extracting Textured 3D Meshes from 2D Text-to-Image Models',
      authors: ['Lukas Höllein*', 'Ang Cao*', 'Andrew Owens', 'Justin Johnson', 'Matthias Nießner'],
      venue: 'IEEE ICCV', year: 2023, award: '',
      topic: 'Graphics', pages: '', date: 'Apr. 2025',
      keywords: ['Text-to-3D Scene Generation', 'Foundation Model'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_Text2Room.pdf',
      links: [['Project', 'https://lukashoel.github.io/text-to-room/'], ['Paper', 'https://openaccess.thecvf.com/content/ICCV2023/html/Hollein_Text2Room_Extracting_Textured_3D_Meshes_from_2D_Text-to-Image_Models_ICCV_2023_paper.html']]
    },
    {
      title: 'SceneCraft: Layout-Guided 3D Scene Generation',
      authors: ['Xiuyu Yang*', 'Yunze Man*', 'Jun-Kun Chen', 'Yu-Xiong Wang'],
      venue: 'NeurIPS', year: 2024, award: '',
      topic: 'Graphics', pages: '', date: 'Jul. 2025',
      keywords: ['Text-to-3D Scene Generation', 'Spatial Guidance'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_SceneCraft.pdf',
      links: [['Project', 'https://orangesodahub.github.io/SceneCraft/'], ['Paper', 'https://arxiv.org/abs/2410.09049']]
    },
    {
      title: 'MVDiffusion: Enabling Holistic Multi-view Image Generation with Correspondence-Aware Diffusion',
      authors: ['Shitao Tang*', 'Fuyang Zhang*', 'Jiacheng Chen', 'Peng Wang', 'Yasutaka Furukawa'],
      venue: 'NeurIPS', year: 2023, award: 'Spotlight',
      topic: 'AI', pages: '', date: 'Sep. 2025',
      keywords: ['Text-to-3D Scene Generation', 'Multi-View Consistency'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_MVDiffusion.pdf',
      links: [['Project', 'https://mvdiffusion.github.io/'], ['Paper', 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/a0da690a47b2f52faa63f6fe054057b5-Abstract-Conference.html']]
    },
    {
      title: 'Align your Latents: High-Resolution Video Synthesis with Latent Diffusion Models',
      authors: ['Andreas Blattmann*', 'Robin Rombach*', 'Huan Ling*', 'Tim Dockhorn*', 'Seung Wook Kim', 'Sanja Fidler', 'Karsten Kreis'],
      venue: 'IEEE CVPR', year: 2023, award: '',
      topic: 'AI', pages: '', date: 'Nov. 2025',
      keywords: ['Video Generation', 'LDM'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_VideoLDM_pdf.pdf',
      links: [['Project', 'https://research.nvidia.com/labs/toronto-ai/VideoLDM/'], ['Paper', 'https://openaccess.thecvf.com/content/CVPR2023/html/Blattmann_Align_Your_Latents_High-Resolution_Video_Synthesis_With_Latent_Diffusion_Models_CVPR_2023_paper.html']]
    },
    {
      title: 'GEN3C: 3D-Informed World-Consistent Video Generation with Precise Camera Control',
      authors: ['Xuanchi Ren*', 'Tianchang Shen*', 'Jiahui Huang', 'Huan Ling', 'Yifan Lu', 'Merlin Nimier-David', 'Thomas Müller', 'Alexander Keller', 'Sanja Fidler', 'Jun Gao'],
      venue: 'IEEE CVPR', year: 2025, award: 'Highlight',
      topic: 'Graphics', pages: '', date: 'Feb. 2026',
      keywords: ['Video Diffusion', '3D Consistency', 'Camera Control'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_GEN3C_pdf.pdf',
      links: [['Project', 'https://research.nvidia.com/labs/toronto-ai/GEN3C/'], ['Paper', 'https://openaccess.thecvf.com/content/CVPR2025/html/Ren_GEN3C_3D-Informed_World-Consistent_Video_Generation_with_Precise_Camera_Control_CVPR_2025_paper.html']]
    },
    {
      title: 'VGGT: Visual Geometry Grounded Transformer',
      authors: ['Jianyuan Wang', 'Minghao Chen', 'Nikita Karaev', 'Andrea Vedaldi', 'Christian Rupprecht', 'David Novotny'],
      venue: 'IEEE CVPR', year: 2025, award: 'Best Paper',
      topic: 'Vision', pages: '', date: 'Mar. 2026',
      keywords: ['3D Reconstruction', 'Feed-Forward', 'Multi-Task Model'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_VGGT_pdf.pdf',
      links: [['Project', 'https://vgg-t.github.io/'], ['Paper', 'https://openaccess.thecvf.com/content/CVPR2025/html/Wang_VGGT_Visual_Geometry_Grounded_Transformer_CVPR_2025_paper.html']]
    },
    {
      title: 'LayoutVLM: Differentiable Optimization of 3D Layout via Vision-Language Models',
      authors: ['Fan-Yun Sun*', 'Weiyu Liu*', 'Siyi Gu', 'Dylan Lim', 'Goutam Bhat', 'Federico Tombari', 'Manling Li', 'Nick Haber', 'Jiajun Wu'],
      venue: 'IEEE CVPR', year: 2025, award: '',
      topic: 'Graphics', pages: '', date: 'Jul. 2026',
      keywords: ['Vision-Language Models (VLMs)', 'Layout Generation'],
      pdf: 'assets/review_pdf/LAVA_Seminar_HyeshimKim_LayoutVLM.pdf',
      links: [['Project', 'https://ai.stanford.edu/~sunfanyun/layoutvlm/'], ['Paper', 'https://openaccess.thecvf.com/content/CVPR2025/html/Sun_LayoutVLM_Differentiable_Optimization_of_3D_Layout_via_Vision-Language_Models_CVPR_2025_paper.html']]
    },
  ]
};
