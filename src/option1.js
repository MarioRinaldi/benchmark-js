function option1 (v) {
  if (v == 0) {
    return '⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪'
  }
  if (v > 0.0 && v <= 0.1) {
    return '🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪'
  }
  if (v > 0.1 && v <= 0.2) {
    return '🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪'
  }
  if (v > 0.2 && v <= 0.3) {
    return '🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪'
  }
  if (v > 0.3 && v <= 0.4) {
    return '🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪'
  }
  if (v > 0.4 && v <= 0.5) {
    return '🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪'
  }
  if (v > 0.5 && v <= 0.6) {
    return '🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪'
  }
  if (v > 0.6 && v <= 0.7) {
    return '🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪'
  }
  if (v > 0.7 && v <= 0.8) {
    return '🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪'
  }
  if (v > 0.8 && v <= 0.9) {
    return '🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪'
  }
  return '🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵'
};

module.exports = option1;
