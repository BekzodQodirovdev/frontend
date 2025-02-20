import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Card } from "./card";

export const Novinki = ({ data, title }) => {
    return (
        <Container sx={{ py: "100px" }}>
            <Stack justifyContent="space-between" pb="30px" direction="row">
                <Stack gap="32px" direction="row" alignItems="end">
                    <Typography variant="h2">{title}</Typography>
                    <Typography>Все {title}</Typography>
                </Stack>
                <Stack gap="24px" direction="row">
                    <Button
                        color="#618C78"
                        sx={{
                            py: "9px",
                            px: "11px",
                            bgcolor: "#F2F2F2",
                        }}
                    >
                        {"<"}
                    </Button>
                    <Button
                        color="#618C78"
                        sx={{
                            py: "9px",
                            px: "11px",
                            bgcolor: "#F2F2F2",
                        }}
                    >
                        {">"}
                    </Button>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
                {data.map((item) =>
                    title == item.category ? (
                        <Card key={item.id} {...item} />
                    ) : (
                        ""
                    )
                )}
            </Stack>
        </Container>
    );
};
