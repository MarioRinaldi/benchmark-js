function option2 (v) {
  if (v > 0.9) {
    return '🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵'
  };
  if (v > 0.8) {
    return '🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪'
  };
  if (v > 0.7) {
    return '🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪'
  };
  if (v > 0.6) {
    return '🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪'
  };
  if (v > 0.5) {
    return '🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪'
  };
  if (v > 0.4) {
    return '🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪'
  };
  if (v > 0.3) {
    return '🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪'
  };
  if (v > 0.2) {
    return '🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪'
  };
  if (v > 0.1) {
    return '🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪'
  };
  if (v > 0) {
    return '🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪'
  };
  return '⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪'
};

module.exports = option2;
