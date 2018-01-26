# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.2.0] / 2018-01-25

### Changed

- Update minimum version of ramda-adjunct 2.4.0.
- Remove `isNonEmptyString` from this package
  as it is exported through ramda-adjunct.

## [1.1.2] / 2018-01-25

### Changed

- Update to [makenew-node-lib] v4.1.12.

### Fixed

- Use ramda-adjunct at `~2.2.0` since later versions
  add `isNonEmptyString` which conflicts.

## [1.1.1] / 2017-12-29

### Changed

- Update to [makenew-node-lib] v4.1.9.

### Fixed

- Simplify peerDependencies notation.

## [1.1.0] / 2017-12-21

### Added

- `entries`: Shortcut for `Object.entries`.
- `findMin` and `findMax`: Finds the minimum or maximum value in a list.
- `ifEqDefaultTo`: Returns the second argument if the third argument
  is equal (in `R.equals` terms) to the first argument,
  otherwise returns the third argument.
- `mapPath`: Maps over the value at the end of a path.
- `nOf`: Returns an array of length n filled with the value provided.
- `objOfKeys`: Returns an object containing the provided keys
   with all keys assigned the same provided value.
- `sleeP`: Returns a promise which resolves after the specified number of milliseconds.
- `sortByPath`: Sorts the list by the supplied property path.
- `sortByProp`: Sorts the list by the supplied property.

## 1.0.0 / 2017-11-20

- Initial release.

[makenew-node-lib]: https://github.com/meltwater/makenew-node-lib

[Unreleased]: https://github.com/meltwater/phi/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/meltwater/phi/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/meltwater/phi/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/meltwater/phi/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/meltwater/phi/compare/v1.0.0...v1.1.0
