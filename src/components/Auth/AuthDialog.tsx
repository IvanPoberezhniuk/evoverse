import * as React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { DialogActions, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import Auth from "./";

interface IFormDialog {
  open: boolean;
  setOpen: (value: boolean) => void;
  tabIndex: number;
}

const styles = {
  paper: {
    mx: { xs: 0 },
    my: { xs: 0 },
    width: "100%",
    maxWidth: { xs: "100%", sm: 380 },
    height: { xs: "100%", sm: "auto" },
    maxHeight: { xs: "100%", md: "calc(100% - 64px)" },
  },
  dialogActions: {
    pb: 0,
  },
  dialogContent: {
    pt: 0,
    display: "flex",
    justifyContent: "center",
  },
};

export default function AuthDialog({ open, setOpen, tabIndex }: IFormDialog) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLButtonElement>) => {
            handleClose();
          },
          sx: styles.paper,
        }}
      >
        <DialogActions sx={styles.dialogActions}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent sx={styles.dialogContent}>
          <Auth tabIndex={tabIndex} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
