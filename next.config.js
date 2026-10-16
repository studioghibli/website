/*
 * `permanent: false` (307) is deliberate while the restructure is in flight —
 * a 308 gets cached in browsers hard, which is painful to iterate against.
 * Flip these to `permanent: true` before the site goes live: the old routes
 * are genuinely retired, and the sections they pointed at are now anchors.
 *
 * The image config Next 16 wants belongs here too, and lands in P5.
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
