# test-service-golf

Throwaway package used to prove [release-please](https://github.com/googleapis/release-please) before using it in `omd-cli`.

`0.1.0` in `package.json` and `.release-please-manifest.json` is the baseline. Do not bump it by hand.

1. Pull request titles follow [conventional commits](https://www.conventionalcommits.org/). The squash-merge title decides the release.
   - `fix:` releases a patch, `feat:` releases a minor version while this package is on `0.x`.
   - `chore:`, `docs:`, `test:`, `ci:`, `refactor:` do not release.
2. After each merge to `main`, release-please opens or updates a `chore: release X.Y.Z` pull request.
3. Merging that pull request tags `vX.Y.Z` and publishes `saturday-vibes-test-service-golf` to the public npm registry.

Other merges to `main` run release-please and skip publish.
