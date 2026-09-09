---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I'm **Yuxiu Yan (Iris)**, a Master's student in **Industrial Design** at [***Xi'an Jiaotong-Liverpool University***](https://www.xjtlu.edu.cn/), with a bachelor's degree in **Product Design** from [***Southwest Jiaotong University***](https://en.swjtu.edu.cn/).

My research focuses on **embodied interaction and Human–AI interaction**, exploring how **multisensory experiences can make invisible phenomena perceptible**—from embodied and physiological states to the environmental and cultural dimensions of technology. I am interested in bridging **design practice and HCI research** to create new ways of sensing, reflecting, and relating to the world around us.

<div class="opportunity-note">
  <div class="pin">📌</div>

  <div class="opportunity-title">
    Currently open to opportunities
  </div>

  <div class="opportunity-text">
    I am currently applying to <strong>PhD programs</strong> and am open to
    <strong>research assistant (RA) positions</strong> and
    <strong>research collaborations</strong>.
    Feel free to reach out about potential opportunities. <strong>: )</strong>
  </div>
</div>

<style>
.opportunity-note {
  position: relative;
  margin: 2.2rem 0 2.8rem;
  padding: 1.7rem 1.8rem 1.6rem;
  background: #F3F8FC;
  border: 1px solid #C8DDEA;
  border-radius: 14px;
}

.opportunity-note .pin {
  position: absolute;
  top: -18px;
  right: 22px;
  font-size: 1.8rem;
  transform: rotate(10deg);
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.08));
}

.opportunity-title {
  margin-bottom: 0.55rem;
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #24465A;
}

.opportunity-text {
  max-width: 900px;
  font-size: 0.96rem;
  line-height: 1.75;
  color: #394B57;
}

.opportunity-text strong {
  font-weight: 600;
  color: #24465A;
}
</style>

<div class="news-box">
  <div class="news-header">🔥 News</div>

  <div class="news-scroll">

    <div class="news-item">
      <div class="news-date">Jun 2026</div>
      <div class="news-content">
        Started an internship in Product Development at
        <strong>L'Oréal China</strong>, working on packaging development and
        AI-assisted workflow design.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 2026</div>
      <div class="news-content">
        Joined the <strong>HCIX Summer Research Program</strong> as a Visiting
        Student Researcher at <strong>The Hybrid-X Lab, Tongji University</strong>,
        advised by <strong>Assoc. Prof. Guanhong Liu</strong>. Conducted research
        on cultural translation in Dunhuang heritage design with
        <strong>Haiqing Xu</strong>, resulting in a manuscript currently under
        review for <strong>CHI 2027</strong>.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 2026</div>
      <div class="news-content">
        <em>SilkDream Quest</em>, an interactive cultural heritage project for
        accessible museum education, was exhibited at the
        <strong>Suzhou Silk Museum</strong> as part of
        <em>Warp and Weft Without Boundaries</em> for International Museum Day.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">May 2026</div>
      <div class="news-content">
        <em>A Research-Led Learning Framework for Human-Centered AI</em> was
        accepted to <strong>ICAIE 2026</strong> and received the
        <strong>Excellent Oral Presentation Award</strong>.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Apr 2026</div>
      <div class="news-content">
        <em>In-Class Flipped Classroom in VR Environments</em> was published in
        the <strong>Proceedings of CSTE 2026</strong>, pp. 28–34.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Mar 2026</div>
      <div class="news-content">
        Began a scoping review of <strong>Human–Plant Interaction</strong>
        research within HCI and interaction design.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Dec 2025</div>
      <div class="news-content">
        Joined the <strong>Experience and Interaction Lab at
        Xi'an Jiaotong-Liverpool University</strong> as a Research Assistant,
        advised by <strong>Dr. Mengjie Huang</strong>.
      </div>
    </div>

  </div>
</div>

<style>
.news-box {
  margin: 2rem 0 2.5rem;
  padding: 1.2rem 1.4rem;
  background: #FAFCFD;
  border: 1px solid #DCE7ED;
  border-radius: 12px;
}

.news-header {
  margin-bottom: 0.8rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #24465A;
}

.news-scroll {
  max-height: 280px;
  overflow-y: auto;
  padding-right: 0.8rem;
  scroll-behavior: smooth;
}

.news-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E8EFF3;
}

.news-item:last-child {
  border-bottom: none;
}

.news-date {
  flex: 0 0 75px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #6E8FA1;
  padding-top: 0.1rem;
}

.news-content {
  font-size: 0.93rem;
  line-height: 1.7;
  color: #394B57;
}

.news-content strong {
  color: #24465A;
  font-weight: 600;
}

.news-scroll::-webkit-scrollbar {
  width: 5px;
}

.news-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.news-scroll::-webkit-scrollbar-thumb {
  background: #C8DDEA;
  border-radius: 10px;
}

.news-scroll::-webkit-scrollbar-thumb:hover {
  background: #AFC9D8;
}
</style>

# 🎓 Education

<div style="display: flex; align-items: center; margin-bottom: 6px;">
  <img src="/images/xjtlu-logo.png" alt="Xi'an Jiaotong-Liverpool University" style="width: 42px; height: 42px; object-fit: contain; margin-right: 12px;">
  <strong>Xi'an Jiaotong-Liverpool University</strong>
</div>

*Sep 2025 – Jul 2027 (Expected)*  
**Master of Industrial Design**, Suzhou, China  
GPA: **3.79/4.0** · Merit-based Postgraduate Scholarship (**30% Tuition Reduction**)

<div style="display: flex; align-items: center; margin-top: 28px; margin-bottom: 6px;">
  <img src="/images/swjtu-logo.png" alt="Southwest Jiaotong University" style="width: 42px; height: 42px; object-fit: contain; margin-right: 12px;">
  <strong>Southwest Jiaotong University</strong>
</div>

*Sep 2020 – Jun 2024*  
**Bachelor of Product Design**, Chengdu, China  
GPA: **3.55/4.0** · **Outstanding Graduate (University Level)**

# 📝 Publications

## Conference Papers

**[1]** Yan, Y., Huang, M., Wang, X., Su, C., & Yang, R. (2026). *A Research-Led Learning Framework for Human-Centered AI: Designing for Emotional Well-being through Interdisciplinary Integration.* International Conference on Artificial Intelligence in Education (ICAIE 2026). **Accepted.**
**Excellent Oral Presentation Award, ICAIE 2026.**

**[2]** Chen, X., Cao, J., Yan, Y., & Xu, M. (2026). *In-Class Flipped Classroom in VR Environments: The Trade-off between Knowledge Retention and Design Confidence.* 2026 8th International Conference on Computer Science and Technologies in Education (CSTE 2026), 28–34. [\(DOI\)](https://doi.org/10.1109/CSTE69562.2026.11649593)

## Manuscripts Under Review

**[3]** Yan, Y., Chen, C.-X., Cui, Z., Ye, Z., ten Bhomer, M., & Zhou, A.-L. (2026). *Somatic Complicity: Revealing the Hidden Cost of LLM Interaction.* Under review, ACM International Conference on Tangible, Embedded, and Embodied Interaction (TEI 2027).

**[4]** Yan, Y., Huang, M., & Yang, R. (2026). *A Scoping Review of Human-Plant Interaction.* Under review, International Journal of Human-Computer Interaction (IJHCI).

**[5]** Xu, H., Yan, Y., Liu, G., Yu, B., Xue, M., Zuo, T., Hu, J., & Shen, M. (2026). *Where Heritage Still Does Design Work: Translating Dunhuang into Serious-Purpose Interaction Design.* Under review, ACM Conference on Human Factors in Computing Systems (CHI 2027).

# 💻 Internships

<div style="display: flex; align-items: center; margin-bottom: 8px;">
  <img src="/images/loreal-logo.png" alt="L'Oréal" style="width: 36px; height: 36px; object-fit: contain; margin-right: 10px;">
  <strong>L'Oréal China | Product Development Intern</strong>
</div>

*May 2026 – Present*

Coordinated packaging development for **12 products**, managing design iterations and sample timelines. Reviewed **70+ packaging samples** and established a standardized review process to reduce repeated iterations. Co-designed and tested a **GPT-based email extraction tool** for tracking sample progress across product lines; refined prompts through comparison with manual review, saving approximately **10 hours of team time weekly**.

<div style="display: flex; align-items: center; margin-top: 24px; margin-bottom: 8px;">
  <img src="/images/siemens-logo.png" alt="Siemens" style="width: 36px; height: 36px; object-fit: contain; margin-right: 10px;">
  <strong>Siemens Ltd., China | User Experience Intern</strong>
</div>

*Jan 2024 – Jul 2024*

Conducted user research and interface analysis for industrial digital products. Built **20+ pages of interface prototypes** in Figma and Axure to support interaction design improvements. Collaborated with product managers and engineers through iterative design and development cycles.

# 🎖 Honors and Awards

* **Silver Award**, Marathon International Design Workshop — *Oct 2023*

* **Second Prize**, 2nd Hong Kong Digital Art and Design Competition (HKDADC) — *Jun 2023*

* **Third Prize**, National Advertising Art Competition for College Students (Sichuan Province) — *Sep 2022*

* **Comprehensive Scholarship (Third Prize)**, Southwest Jiaotong University — *2021–2023*
