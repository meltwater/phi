# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/)
and this project adheres to [Semantic Versioning](https://semver.org/).

## [3.10.0] / 2020-12-23

### Changed

- Update minimum version of ramda-adjunct to 2.29.0.

### Added

- Default export.

## [3.9.1] / 2020-11-17

### Changed

- Update all dependencies and test on Node Fermium.

## [3.9.0] / 2020-11-16

### Changed

- Update minimum version of ramda-adjunct to 2.28.0.
- License to MIT.

## [3.8.0] / 2020-06-17

### Changed

- Update minimum version of ramda-adjunct to 2.27.0.

## [3.7.0] / 2020-03-19

### Changed

- Update minimum version of ramda-adjunct to 2.26.0.

## [3.6.0] / 2020-02-28

### Changed

- Update minimum version of ramda to 0.27.0.
- Update minimum version of ramda-adjunct to 2.25.0.

## [3.5.1] / 2019-10-05

### Fixed

- Add missing final newline for `toNdjson`.

## [3.5.0] / 2019-10-04

### Added

- `fromJson` and `toJson`.
- `fromNdjson` and `toNdjson`.

### Changed

- Update minimum version of ramda-adjunct to 2.21.0.

## [3.4.1] / 2019-08-17

### Fixed

- Export missing `assocWith` and `assocPathWith`.

## [3.4.0] / 2019-08-15

### Added

- `assocWith` and `assocPathWith`.

### Changed

- Update minimum version of ramda-adjunct to 2.19.0.

## [3.3.0] / 2019-06-25

### Changed

- Update minimum version of ramda-adjunct to 2.18.0.

## [3.2.0] / 2019-05-20

### Changed

- Update minimum version of ramda-adjunct to 2.17.0.

## [3.1.0] / 2019-02-26

### Changed

- Update minimum version of ramda-adjunct to 2.16.1.

## [3.0.1] / 2019-01-24

### Changed

- Open source under the Apache License, Version 2.0!

## [3.0.0] / 2019-01-02

### Changed

- Update minimum version of ramda to 0.26.1.
  - (*Breaking*) Swapped meaning of `mergeLeft` and `mergeRight`.
    Update all use of `mergeRight` with `mergeLeft` and
    update all use of `merge` or `mergeLeft` with `mergeRight`.
- Update minimum version of ramda-adjunct to 2.13.0.

## [2.7.1] / 2018-12-20

### Fixed

- Revert to previous ramda and ramda-adjunct versions.
  - Cannot use ramda to 0.26.1 and ramda-adjunct to 2.13.0
    as long as they both export `then`.

## [2.7.0] / 2018-12-20

### Changed

- Update minimum version of ramda to 0.26.1.
- Update minimum version of ramda-adjunct to 2.13.0.
- Update to [makenew-node-lib] v5.3.1.

## [2.6.0] / 2018-11-12

### Added

- `identityObj`: Returns an object containing the provided keys
  with each key equal to its value.

## [2.5.0] / 2018-11-12

### Added

- `objFromListWith`: Returns an object created from a list with
  keys derived from each element.

### Changed

- Update minimum version of ramda-adjunct to 2.11.0.

## [2.4.2] / 2018-10-01

### Fixed

- Broken documentation redirect.

## [2.4.1] / 2018-10-01

### Fixed

- Broken documentation redirect (was not fixed).

## [2.4.0] / 2018-10-01

### Changed

- Update minimum version of ramda-adjunct to 2.10.0.
- Update to [makenew-node-lib] v5.0.0.
  (Includes building with Babel 7.)

## [2.3.1] / 2018-07-12

### Fixed

- Did not export `mapRecursive`.

## [2.3.0] / 2018-07-12

### Added

- `mapRecursive`: applies map recursively to nested objects.

## [2.2.0] / 2018-07-06

### Added

- `objFromKeys`: makes an object out of keys,
  with values derived from them.

## [2.1.0] / 2018-06-06

### Changed

- Update minimum version of ramda-adjunct 2.9.0.
- Update to [makenew-node-lib] v4.7.1.

## [2.0.0] / 2018-02-27

### Changed

- (**Breaking**) Rename `ifEqDefaultTo` to `defaultWhenEquals`.
- (**Breaking**) Move ramda and ramda-adjunct
  from peerDependencies to dependencies.
- Update to [makenew-node-lib] v4.5.0.

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

[Unreleased]: https://github.com/meltwater/phi/compare/v3.10.0...HEAD
[3.10.0]: https://github.com/meltwater/phi/compare/v3.9.1...v3.10.0
[3.9.1]: https://github.com/meltwater/phi/compare/v3.9.0...v3.9.1
[3.9.0]: https://github.com/meltwater/phi/compare/v3.8.0...v3.9.0
[3.8.0]: https://github.com/meltwater/phi/compare/v3.7.0...v3.8.0
[3.7.0]: https://github.com/meltwater/phi/compare/v3.6.0...v3.7.0
[3.6.0]: https://github.com/meltwater/phi/compare/v3.5.1...v3.6.0
[3.5.1]: https://github.com/meltwater/phi/compare/v3.5.0...v3.5.1
[3.5.0]: https://github.com/meltwater/phi/compare/v3.4.1...v3.5.0
[3.4.1]: https://github.com/meltwater/phi/compare/v3.4.0...v3.4.1
[3.4.0]: https://github.com/meltwater/phi/compare/v3.3.0...v3.4.0
[3.3.0]: https://github.com/meltwater/phi/compare/v3.2.0...v3.3.0
[3.2.0]: https://github.com/meltwater/phi/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/meltwater/phi/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/meltwater/phi/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/meltwater/phi/compare/v2.7.1...v3.0.0
[2.7.1]: https://github.com/meltwater/phi/compare/v2.7.0...v2.7.1
[2.7.0]: https://github.com/meltwater/phi/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/meltwater/phi/compare/v2.5.0...v2.6.0
[2.5.0]: https://github.com/meltwater/phi/compare/v2.4.2...v2.5.0
[2.4.2]: https://github.com/meltwater/phi/compare/v2.4.1...v2.4.2
[2.4.1]: https://github.com/meltwater/phi/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/meltwater/phi/compare/v2.3.1...v2.4.0
[2.3.1]: https://github.com/meltwater/phi/compare/v2.3.0...v2.3.1
[2.3.0]: https://github.com/meltwater/phi/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/meltwater/phi/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/meltwater/phi/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/meltwater/phi/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/meltwater/phi/compare/v1.1.2...v1.2.0
[1.1.2]: https://github.com/meltwater/phi/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/meltwater/phi/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/meltwater/phi/compare/v1.0.0...v1.1.0
