/*
 * `permanent: false` (307) is deliberate while the restructure is in flight —
 * a 308 gets cached in browsers hard, which is painful to iterate against.
 * Flip these to `permanent: true` before the site goes live: the old routes
 * are genuinely retired, and the sections they pointed at are now anchors.
 *
 * No `images` block: P5 checked whether one was needed and it isn't. The two
 * `<Image>` props that no longer exist (`objectFit`, `objectPosition`) moved
 * into CSS, and Next 16 bypasses the optimizer for SVG on its own, so the
 * three icon images needed no config either. A build with no image config
 * produces no warnings, which is the check that settled it.
 */
module.exports = {
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: false },
      { source: '/experience', destination: '/#experience', permanent: false },
      { source: '/interests', destination: '/#about', permanent: false },
    ];
  },
};
