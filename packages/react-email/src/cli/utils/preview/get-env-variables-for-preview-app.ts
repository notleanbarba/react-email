import path from 'path';

export const getEnvVariablesForPreviewApp = (
  relativePathToEmailsDirectory: string,
  cwd: string,
) => {
  return {
    DIR_RELATIVE_PATH: relativePathToEmailsDirectory,
    EMAILS_DIR_ABSOLUTE_PATH: path.resolve(cwd, relativePathToEmailsDirectory),
    USER_PROJECT_LOCATION: cwd,
  } as const;
};
